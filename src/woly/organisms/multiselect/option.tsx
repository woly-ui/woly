import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Checkbox } from 'woly/molecules';
import { ListItem } from 'woly/atoms';
import { Priority } from 'lib/types';

type MultiSelectOptions = React.OptionHTMLAttributes<HTMLOptionElement>;

interface OptionProps {
  isCheckbox?: boolean;
  onClick: React.EventHandler<React.SyntheticEvent>;
  option: MultiSelectOptions;
}

export const OptionBase: React.FC<OptionProps & Priority> = ({
  isCheckbox,
  onClick,
  option,
  priority,
}) => {
  const { id, selected, label } = option;
  if (isCheckbox) {
    return (
      /** TODO(13.09.21): Fix checkbox bug */
      <Checkbox
        checked={selected as boolean}
        id={id as string}
        onChange={onClick}
        priority={priority}
        text={label}
      />
    );
  }
  return <ListItem text={label} id={id as string} onClick={onClick} />;
};

export const Option = styled(OptionBase)`
  display: flex;
  padding: 10px;
` as StyledComponent<'div', Record<string, unknown>, OptionProps & Priority>;
