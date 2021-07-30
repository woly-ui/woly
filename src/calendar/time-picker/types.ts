import { InputProps } from 'ui/atoms/input';
import { Priority } from 'lib/types';

type ReservedProps = 'type' | 'autoComplete' | 'onChange' | 'value';

export type View = 'HH:mm:ss' | 'hh:mm:ss' | 'HH:mm' | 'hh:mm';

export type TimePickerProps = Omit<InputProps, ReservedProps> &
  Priority & {
    view?: View;
    value: string;
    hourStep?: number;
    minStep?: number;
    secStep?: number;
    onChange: (value: string) => void;
  };
