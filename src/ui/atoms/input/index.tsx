import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import { InputContainer, InputElement } from '../../elements/quarks';

/**
 * --woly-font-size
 * --woly-rounding
 * --woly-line-height
 * --woly-background
 * --woly-background-disabled
 * --woly-border
 * --woly-border-focus
 * --woly-border-disabled
 * --woly-color
 * --woly-color-disabled
 *
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  left?: React.ReactNode;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  right?: React.ReactNode;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

const InputBase: React.FC<InputProps & Variant> = ({
  className,
  disabled,
  left,
  name,
  onChange,
  placeholder,
  right,
  type,
  value,
  variant = 'default',
}) => (
  <InputContainer
    className={className}
    disabled={disabled}
    variant={variant}
    left={left}
    right={right}
  >
    <InputElement
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </InputContainer>
);

export const Input = styled(InputBase)`
  --woly-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
` as StyledComponent<'div', Record<string, unknown>, InputProps & Variant>;
