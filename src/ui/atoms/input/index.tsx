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

interface InputProps {
  value?: HTMLInputElement['value'];
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  name: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
}

const Input: React.FC<InputProps & { className: string }> = ({
  value,
  placeholder,
  type = 'text',
  name,
  disabled,
  className,
  onChange,
  ...p
}) => (
  <input
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    className={className}
    disabled={disabled}
    onChange={onChange}
    {...p}
  />
);

export const Base = styled(Input)`
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
