import 'react-calendar/dist/Calendar.css';

import * as React from 'react';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import Calendar, { CalendarTileProperties, CalendarType, Detail } from 'react-calendar';
import { Input } from 'ui/atoms';
import { Popover } from 'ui/molecules';

dayjs.extend(customParseFormat);

interface DatePickerProps {
  autoFocus?: boolean;
  calendarType?: CalendarType;
  disabled?: boolean;
  format?: string;
  icon?: React.ReactNode;
  isDayDisabled?: ((props: CalendarTileProperties) => boolean) | undefined;
  isOpen?: boolean;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  name: string;
  onChange: (date: Date) => void;
  placeholder?: string;
  value: Date | string;
  view?: Detail;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  autoFocus = false,
  calendarType,
  disabled,
  format = 'YYYY-MM-DD',
  icon,
  isDayDisabled,
  isOpen = false,
  locale = 'en',
  maxDate,
  minDate,
  name,
  onChange,
  placeholder,
  value,
  view,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isVisible, setVisibility] = React.useState(isOpen);
  const [inputValue, setInputValue] = React.useState('');
  const [calendarValue, setCalendarValue] = React.useState(dayjs().locale(locale));

  React.useEffect(() => {
    if (typeof value === 'string') {
      setInputValue(value);
      setCalendarValue(dayjs(value, format).locale(locale));
    } else {
      setInputValue(dayjs(value).locale(locale).format(format));
      setCalendarValue(dayjs(value).locale(locale));
    }
  }, [value, format]);

  const checkInputDate = React.useCallback(() => {
    if (inputValue === '') {
      return;
    }
    const date = dayjs(inputValue, format, locale);

    if (dayjs(date, format).isValid()) {
      onChange(date.toDate());
    } else {
      /**
       * TODO(11.08.2021): Show error message if date is invalid
       */
      console.log('invalid date!');
    }
  }, [onChange, inputValue, format]);

  const onCalendarChange = React.useCallback(
    (date: Date) => {
      onChange(date);
      if (view) {
        setVisibility(false);
      }
    },
    [onChange],
  );

  const onClick = React.useCallback(() => {
    checkInputDate();
    setVisibility(!isVisible);
  }, [isVisible, checkInputDate]);

  const onClickDay = React.useCallback(
    (date: Date) => {
      onChange(date);
      setVisibility(false);
    },
    [isVisible, checkInputDate],
  );

  const onInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const onKeyUp = React.useCallback(
    (event) => {
      if (event.key === 'Enter') {
        checkInputDate();
        setVisibility(!isVisible);
      }

      if (event.key === 'Escape') {
        checkInputDate();
        setVisibility(false);
      }
    },
    [isVisible, checkInputDate],
  );

  const onViewChange = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <Popover
      disabled={disabled}
      content={
        <div style={{ width: '350px' }} ref={ref} tabIndex={0}>
          <Calendar
            calendarType={calendarType}
            locale={locale}
            maxDate={maxDate}
            minDate={minDate}
            onClickDay={onClickDay}
            onClickDecade={onCalendarChange}
            onClickMonth={onCalendarChange}
            onClickYear={onCalendarChange}
            onViewChange={onViewChange}
            tileDisabled={isDayDisabled}
            value={calendarValue.toDate()}
            view={view}
          />
        </div>
      }
      isOpen={isVisible}
    >
      <Input
        autoFocus={autoFocus}
        disabled={disabled}
        name={name}
        onChange={onInputChange}
        onClick={onClick}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        rightIcon={icon}
        type="text"
        value={inputValue}
      />
    </Popover>
  );
};
