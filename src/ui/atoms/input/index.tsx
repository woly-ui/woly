import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-color
 * --woly-input-border-color
 * --woly-input-width
 * --woly-font-size
 * --woly-rounding
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email';
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  className?: string;
}

const InputBase: React.FC<InputProps & Variant> = ({
  className,
  name,
  onChange,
  type = 'text',
  variant = 'default',
  ...p
}) => (
  <input
    className={className}
    data-variant={variant}
    name={name}
    onChange={onChange}
    type={type}
    {...p}
  />
);

export const Input = styled(InputBase)`
  --woly-input-width: 100%;
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  box-sizing: border-box;

  width: var(--woly-input-width);
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  font-size: var(--woly-font-size, 1rem);

  border: solid 1px var(--woly-input-border-color);
  border-radius: var(--woly-rounding, 3px);
` as StyledComponent<'input', Record<string, unknown>, InputProps & Variant>;
