import { InputProps } from 'ui/atoms/input';
import { Priority } from 'lib/types';

type ReservedProps = 'type' | 'autoComplete' | 'onChange' | 'value';

export type Format = 'HH:mm:ss' | 'hh:mm:ss' | 'HH:mm' | 'hh:mm';

export type TimePickerProps = Omit<InputProps, ReservedProps> &
  Priority & {
    format?: Format;
    value: string;
    hourStep?: number;
    minStep?: number;
    secStep?: number;
    onChange: (value: string) => void;
  };
