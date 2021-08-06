import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { Input, ListContainer, ListItem, Popover } from 'ui';
import { Priority } from 'lib/types';

import { TimePickerProps } from './types';
import { useTimePicker } from './use-time-picker';

export function TimePicker({
  format = 'HH:mm',
  value,
  name,
  hourStep = 1,
  minStep = 1,
  secStep = 1,
  priority = 'secondary',
  onChange,
  disabled = false,
  ...rest
}: TimePickerProps) {
  const { getInputProps, getPickers, onClose } = useTimePicker({
    format,
    value,
    hourStep,
    minStep,
    secStep,
    onChange,
  });

  const scrollCallbacks = useRef<(() => void)[]>([]);

  function scrollToSelectedItems() {
    for (const cb of scrollCallbacks.current) {
      cb();
    }
  }

  function close() {
    onClose();
    scrollToSelectedItems();
  }

  return (
    <Popover
      isOpen={false}
      priority={priority}
      position="bottom"
      fullWidth={false}
      disabled={disabled}
      onClose={close}
      content={
        <Content>
          {getPickers().map(({ name, value, options, onChange }) => (
            <RangeSelect
              key={name}
              value={value}
              priority={priority}
              options={options}
              setScrollCallback={(cb) => {
                scrollCallbacks.current.push(cb);
              }}
              onChange={onChange}
            />
          ))}
        </Content>
      }
    >
      <Input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getInputProps()}
        autoComplete="off"
        disabled={disabled}
        type="text"
        name={name}
        priority={priority}
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
    border-right: var(--woly-border-width) solid var(--woly-shape-default);
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
