import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { Format } from './types';

interface TimeRangeMap<T> {
  hour: T;
  min: T;
  sec: T;
}

type Value = TimeRangeMap<string>;
type Options = TimeRangeMap<string[]>;

type TimeRange = keyof TimeRangeMap<unknown>;

const timeRanges: TimeRange[] = ['hour', 'min', 'sec'];

interface TimePickerConfig {
  format?: Format;
  value: string;
  hourStep?: number;
  minStep?: number;
  secStep?: number;
  onChange: (value: string) => void;
}

interface TimePickerController {
  getInputProps: () => {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  getPickers: () => {
    name: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
  }[];
  onClose: () => void;
}

export function useTimePicker({
  format = 'HH:mm',
  value,
  hourStep = 1,
  minStep = 1,
  secStep = 1,
  onChange,
}: TimePickerConfig): TimePickerController {
  const timeRangeOptions = useMemo(
    () => getTimeRangeOptions(format, { hour: hourStep, min: minStep, sec: secStep }),
    [format, hourStep, minStep, secStep],
  );
  const [innerInputValue, setInnerInputValue] = useState(() => value);

  useEffect(() => {
    const isValid = validateValue(value, format, timeRangeOptions);

    if (!isValid) {
      onChange('');
      setInnerInputValue('');
      return;
    }

    setInnerInputValue(value);
  }, [value]);

  const parsedValue = parseValue(value, { fallback: pad(0) });

  function getPickers() {
    return getFormatTimeRanges(format).map((timeRange) => ({
      name: timeRange,
      value: parsedValue[timeRange],
      options: timeRangeOptions[timeRange],
      onChange: (value: string) =>
        onChange(formatValue({ ...parsedValue, [timeRange]: value }, format)),
    }));
  }

  function onClose() {
    const isValid = validateValue(innerInputValue, format, timeRangeOptions);

    if (isValid) {
      if (innerInputValue !== value) {
        onChange(innerInputValue);
      }
    } else {
      setInnerInputValue(value);
    }
  }

  function getInputProps() {
    return {
      value: innerInputValue,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        setInnerInputValue(e.target.value);
      },
      onBlur: onClose,
    };
  }

  return {
    getPickers,
    getInputProps,
    onClose,
  };
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

function validateValue(rawValue: string, format: Format, options: Options) {
  const value = parseValue(rawValue, { fallback: null });
  const timeRanges = getFormatTimeRanges(format);
  return (
    rawValue.length === format.length &&
    timeRanges.every((timeRange) => {
      const availableVariants = options[timeRange];
      const timeRangeValue = value[timeRange];
      return timeRangeValue !== null && availableVariants.includes(timeRangeValue);
    })
  );
}

function getTimeRangeOptions(format: Format, step: TimeRangeMap<number>): Options {
  return {
    hour: range(0, format.includes('HH') ? 24 : 12, step.hour).map(pad),
    min: range(0, 60, step.min).map(pad),
    sec: range(0, 60, step.sec).map(pad),
  };
}

function getFormatTimeRanges(format: Format) {
  return timeRanges.slice(0, format.includes('ss') ? 3 : 2);
}

function range(start: number, end: number, step: number) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

function formatValue(value: Value, format: Format) {
  return getFormatTimeRanges(format)
    .map((range) => value[range])
    .join(':');
}
