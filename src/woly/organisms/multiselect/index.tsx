import React from 'react';
import { InputChip, Popover } from 'woly/molecules';
import { ListContainer, ListItem, Surface } from 'woly/atoms';
import { Priority } from 'lib/types';

import { Option } from './option';

type MultiSelectOptions = React.OptionHTMLAttributes<HTMLOptionElement>;

interface MultiselectProps {
  disabled?: boolean;
  noOptionsMessage?: string;
  isCheckbox?: boolean;
  isOpen?: boolean;
  leftIcon?: React.ReactNode;
  onBlur?: (value?: unknown) => void;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onFocus?: (value?: unknown) => void;
  onInputChange?: React.EventHandler<React.SyntheticEvent>;
  options: Array<MultiSelectOptions>;
  rightIcon?: React.ReactNode;
  value: Array<MultiSelectOptions>;
}

export const Multiselect: React.FC<MultiselectProps & Priority> = ({
  children,
  disabled = false,
  isCheckbox = false,
  isOpen = false,
  leftIcon,
  noOptionsMessage = 'No options',
  onBlur,
  onChange,
  onFocus,
  onInputChange,
  options,
  priority,
  rightIcon,
  value,
}) => {
  const [isDropdownOpen, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    if (isDropdownOpen && onFocus) {
      onFocus();
    }
  }, [onFocus, isDropdownOpen]);

  let optionsToShow = options;
  let optionsBlock: React.ReactNode = <ListItem text={noOptionsMessage} />;

  const onClickOutside = React.useCallback(() => {
    setOpen(false);
    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);

  if (!isCheckbox) {
    optionsToShow = options.filter((option: MultiSelectOptions) => !option.selected);
  }

  if (optionsToShow.length > 0) {
    optionsBlock = (
      <>
        {optionsToShow.map((option: MultiSelectOptions) => (
          <Option
            key={option.value as React.Key}
            option={option}
            isCheckbox={isCheckbox}
            onClick={onChange}
          />
        ))}
      </>
    );
  }

  const dropdownOptions = children || optionsBlock;
  return (
    <Popover
      content={
        <Surface>
          <ListContainer>{dropdownOptions}</ListContainer>
        </Surface>
      }
      isOpen={isDropdownOpen}
      onClose={onClickOutside}
      onChildrenClick={React.useCallback(() => setOpen(true), [])}
    >
      <InputChip
        disabled={disabled}
        leftIcon={leftIcon}
        onChange={onInputChange}
        onChipClose={onChange}
        onClick={React.useCallback(() => setOpen(true), [])}
        options={value}
        priority={priority}
        rightIcon={rightIcon}
      />
    </Popover>
  );
};
