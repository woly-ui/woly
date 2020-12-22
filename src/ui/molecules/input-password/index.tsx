import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

import ClosedEyeIcon from '../../../static/icons/closed-eye.svg';
import OpenedEyeIcon from '../../../static/icons/opened-eye.svg';
import { Input } from '../../atoms';

/**
 * --input-border-color
 * --input-border-color-focus
 * --rounding
 */

interface InputPasswordProps {
  className?: string;
  disabled?: boolean;
  iconHidden?: React.ReactNode;
  iconOpen?: React.ReactNode;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: HTMLInputElement['value'];
  variant?: string;
}

export const InputPasswordBase: React.FC<InputPasswordProps> = ({
  className,
  disabled,
  iconHidden,
  iconOpen,
  name,
  onChange,
  placeholder,
  value,
  variant = 'default',
}) => {
  const [isVisible, onClick] = React.useReducer((is) => !is, false);

  const closeEye = iconHidden ?? <ClosedEyeIcon />;
  const openEye = iconOpen ?? <OpenedEyeIcon />;

  return (
    <div className={className} data-variant={variant}>
      <Input
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={isVisible ? 'text' : 'password'}
        value={value}
      />
      <button type="button" onClick={onClick}>
        {isVisible ? closeEye : openEye}
      </button>
    </div>
  );
};

export const InputPassword = styled(InputPasswordBase)`
  position: relative;

  display: flex;
  align-items: center;

  border: solid 1px var(--input-border-color, #d5d5dc);
  border-radius: var(--rounding, 3px);

  button {
    margin: 0;
    padding: 0;

    background-color: transparent;
    border: 0;
    outline: none;
  }

  &:focus,
  &:hover {
    border: solid 1px var(--input-border-color-focus, #a9aab3);
  }

  input {
    border: 0;
    outline: none;
  }
` as StyledComponent<'div', Record<string, unknown>, InputPasswordProps>;
