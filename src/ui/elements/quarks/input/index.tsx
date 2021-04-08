import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

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

interface InputElementProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

const InputElementBase: React.FC<InputElementProps> = ({
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
  ...p
}) => (
  <input
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
    {...p}
  />
);

export const InputElement = styled(InputElementBase)`
  --woly-width: 100%;
  width: var(--woly-width);

  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);

  color: var(--woly-color, #000000);
  background: transparent;

  padding: 0;

  border: none;
  outline: none;

  &:focus,
  &:active {
    outline: none;
  }
` as StyledComponent<'input', Record<string, unknown>, InputElementProps>;
