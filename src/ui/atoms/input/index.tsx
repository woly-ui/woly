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

type InputProps = {
  value?: HTMLInputElement['value'];
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  name: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
};

const Input: React.FC<InputProps & { className: string }> = ({
  value,
  placeholder,
  type = 'text',
  name,
  disabled,
  className,
  onChange,
}) => (
  <input
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    className={className}
    disabled={disabled}
    onChange={onChange}
  />
);

export const Base = styled(Input)`
  --input-width: 100%;
  --input-border-color: #d5d5dc;

  width: var(--input-width);
  border-radius: var(--rounding, 3px);
  border: solid 1px var(--input-border-color);
  padding: var(--spacing-vertical, 1rem) var(--spacing-horizontal, 0.4rem);
  font-size: var(--font-size, 1rem);
` as StyledComponent<'input', {}, InputProps>;
