import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --color
 * --input-border-color
 * --input-width
 * --font-size
 * --spacing-vertical
 * --spacing-horizontal
 * --rounding
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email';
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  className?: string;
  variant?: string;
}

const InputBase: React.FC<InputProps> = ({
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
  --input-width: 100%;
  --input-border-color: #d5d5dc;
  --vertical: calc(1px * var(--component-level) * var(--main-level));
  --horizontal: calc(
    var(--const-m) + (1px * var(--main-level)) + var(--vertical)
  );
  box-sizing: border-box;

  width: var(--input-width);
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  font-size: var(--font-size, 1rem);

  border: solid 1px var(--input-border-color);
  border-radius: var(--rounding, 3px);
` as StyledComponent<'input', Record<string, unknown>, InputProps>;
