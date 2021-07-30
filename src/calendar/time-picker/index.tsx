import styled from 'styled-components';
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Input, ListContainer, ListItem, Popover } from 'ui';
import { Priority } from 'lib/types';
import { useUpdateEffect } from 'lib/hooks';

import { TimePickerProps, View } from './types';

interface TimeRangeMap<T> {
  hour: T;
  min: T;
  sec: T;
}

type Value = TimeRangeMap<string>;
type Options = TimeRangeMap<string[]>;

type TimeRange = keyof TimeRangeMap<unknown>;

const timeRanges: TimeRange[] = ['hour', 'min', 'sec'];

export function TimePicker({
  view = 'HH:mm',
  value: rawValue,
  name,
  hourStep = 1,
  minStep = 1,
  secStep = 1,
  priority = 'secondary',
  onChange,
  disabled = false,
  ...rest
}: TimePickerProps) {
  const timeRangeOptions = useMemo(
    () => getTimeRangeOptions(view, { hour: hourStep, min: minStep, sec: secStep }),
    [view, hourStep, minStep, secStep],
  );
  const [innerInputValue, setInnerInputValue] = useState(
    validateValue(rawValue, view, timeRangeOptions) ? rawValue : '',
  );

  /**
   * См. handleBlur
   */
  const _innerIputValueRef = useRef('');
  _innerIputValueRef.current = innerInputValue;

  const scrollCallbacks = useRef<(() => void)[]>([]);

  useUpdateEffect(() => {
    setInnerInputValue(validateValue(rawValue, view, timeRangeOptions) ? rawValue : '');
  }, [rawValue]);

  const value = parseValue(rawValue, { fallback: pad(0) });

  const selectRangeItem = (timeRangeValue: string, timeRange: TimeRange) => {
    onChange(formatValue({ ...value, [timeRange]: timeRangeValue }, view));
  };

  const timeRanges = getTimeRangesForView(view);

  function handleBlur() {
    /**
     * Тут странная тема
     * Если использовать значение из useState, коллбек вызывается с предыдущим значением, а не с текущим
     */
    const innerInputValue = _innerIputValueRef.current;

    const isValid = validateValue(innerInputValue, view, timeRangeOptions);

    if (isValid) {
      if (innerInputValue !== rawValue) {
        onChange(innerInputValue);
      }
    } else {
      setInnerInputValue(rawValue);
    }

    scrollToSelectedItems();
  }

  function scrollToSelectedItems() {
    for (const cb of scrollCallbacks.current) {
      cb();
    }
  }

  return (
    <Popover
      isOpen={false}
      priority={priority}
      position="bottom"
      fullWidth={false}
      disabled={disabled}
      onClose={handleBlur}
      content={
        <Content>
          {timeRanges.map((timeRange) => (
            <RangeSelect
              key={timeRange}
              value={value[timeRange]}
              priority={priority}
              options={timeRangeOptions[timeRange]}
              setScrollCallback={(cb) => {
                scrollCallbacks.current.push(cb);
              }}
              onChange={(value) => selectRangeItem(value, timeRange)}
            />
          ))}
        </Content>
      }
    >
      <Input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        autoComplete="off"
        disabled={disabled}
        type="text"
        name={name}
        priority={priority}
        value={innerInputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInnerInputValue(e.target.value)}
      />
    </Popover>
  );
}

interface RangeSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  setScrollCallback: (cb: () => void) => void;
}

const RangeSelectItem = styled(ListItem)`
  --local-scroll-gap: 10px;

  & > * {
    padding-right: calc(var(--local-horizontal) + var(--local-scroll-gap));
  }
`;

const Content = styled.div`
  display: flex;
  --local-border-color: var(--woly-shape-default);

  & > *:not(:last-child) {
    border-right: 1px solid var(--woly-shape-default);
  }
`;

const RangeSelectContainer = styled(ListContainer)`
  --local-height: 150px;
  height: var(--local-height);
  overflow-y: scroll;

  [data-stub] {
    height: calc(var(--local-height) - var(--woly-line-height));
  }
`;

function RangeSelect({
  value,
  options,
  onChange,
  priority,
  setScrollCallback,
}: RangeSelectProps & Priority) {
  const selectRef = useRef(null);

  function scrollToSelected() {
    const select = selectRef.current as HTMLElement | null;
    if (!select) return;

    scrollToSelectedItem(select);
  }

  useEffect(scrollToSelected, [value]);

  useEffect(() => {
    setScrollCallback(scrollToSelected);
  }, []);

  return (
    <RangeSelectContainer priority={priority} as="ul" ref={selectRef}>
      {options.map((optionValue) => (
        <RangeSelectItem
          forwardedAs="li"
          key={optionValue}
          text={optionValue}
          priority={priority}
          selected={optionValue === value}
          onClick={() => onChange(optionValue)}
        />
      ))}
      <li data-stub={true} />
    </RangeSelectContainer>
  );
}

function scrollToSelectedItem(selectEl: HTMLElement) {
  const selectedItem = selectEl.querySelector('[data-selected="true"]') as HTMLElement | null;
  if (!selectedItem) return;
  selectEl.scrollTo({ top: selectedItem.offsetTop, behavior: 'smooth' });
}

function parseValue<T>(rawValue: string, { fallback }: { fallback: T }): TimeRangeMap<string | T> {
  const [hour, min, sec] = rawValue.split(':');
  return {
    hour: hour || fallback,
    min: min || fallback,
    sec: sec || fallback,
  };
}

const pad = (num: number) => num.toString().padStart(2, '0');

function validateValue(rawValue: string, view: View, options: Options) {
  const value = parseValue(rawValue, { fallback: null });
  const timeRanges = getTimeRangesForView(view);
  return (
    rawValue.length === view.length &&
    timeRanges.every((timeRange) => {
      const availableVariants = options[timeRange];
      const timeRangeValue = value[timeRange];
      return timeRangeValue !== null && availableVariants.includes(timeRangeValue);
    })
  );
}

function getTimeRangeOptions(view: View, step: TimeRangeMap<number>): Options {
  return {
    hour: range(0, view.includes('HH') ? 24 : 12, step.hour).map(pad),
    min: range(0, 60, step.min).map(pad),
    sec: range(0, 60, step.sec).map(pad),
  };
}

function getTimeRangesForView(view: View) {
  return timeRanges.slice(0, view.includes('ss') ? 3 : 2);
}

function range(start: number, end: number, step: number) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

function formatValue(value: Value, view: View) {
  return getTimeRangesForView(view)
    .map((range) => value[range])
    .join(':');
}
