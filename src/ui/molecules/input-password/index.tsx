import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import ClosedEyeIcon from '../../../static/icons/closed-eye.svg';
import OpenedEyeIcon from '../../../static/icons/opened-eye.svg';
import { Input } from '../../atoms';

/**
 * --woly-border
 * --woly-border-focus
 * --woly-border-disabled
 * --woly-border-width
 * --woly-rounding
 *
 * --woly-background
 * --woly-background-diabled
 * --woly-color
 * --woly-color-disabled
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
    <div className={className} data-variant={variant} data-disabled={disabled}>
      <Input
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={isVisible ? 'text' : 'password'}
        value={value}
      />
      <button type="button" onClick={onClick} disabled={disabled}>
        {isVisible ? closeEye : openEye}
      </button>
    </div>
  );
};

export const InputPassword = styled(InputPasswordBase)`
  --gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );
  position: relative;

  display: flex;
  align-items: center;

  background-color: var(--woly-background, transparent);

  border-color: var(--woly-border, var(--woly-background, #000000));
  border-style: solid;
  border-width: var(--woly-border-width, 1px);
  border-radius: var(--woly-rounding, 3px);

  button {
    margin: 0;
    padding: 0;

    background-color: transparent;
    border: 0;
    outline: none;
  }

  &:focus-within {
    border-color: var(--woly-border-focus, #a9aab3);
  }

  input {
    padding-right: var(--gap, 0.4rem);

    border: 0;
    outline: none;
  }

  &[data-disabled='true'] {
    color: var(--woly-color-disabled, #ffffff);

    background: var(--woly-background-disabled, #ffffff);
    border-color: var(
      --woly-border-disabled,
      var(--woly-background-disabled, #000000)
    );
  }
` as StyledComponent<
  'div',
  Record<string, unknown>,
  InputPasswordProps & Variant
>;
