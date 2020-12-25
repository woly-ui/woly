import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import ClosedEyeIcon from '../../../static/icons/closed-eye.svg';
import OpenedEyeIcon from '../../../static/icons/opened-eye.svg';
import { Input } from '../../atoms';

/**
 * --woly-input-border-color
 * --woly-input-border-color-focus
 * --woly-rounding
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
}

export const InputPasswordBase: React.FC<InputPasswordProps & Variant> = ({
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

  border: solid 1px var(--woly-input-border-color, #d5d5dc);
  border-radius: var(--woly-rounding, 3px);

  button {
    margin: 0;
    padding: 0;

    background-color: transparent;
    border: 0;
    outline: none;
  }

  &:focus,
  &:hover {
    border: solid 1px var(--woly-input-border-color-focus, #a9aab3);
  }

  input {
    border: 0;
    outline: none;
  }
` as StyledComponent<
  'div',
  Record<string, unknown>,
  InputPasswordProps & Variant
>;
