import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

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
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  box-sizing: border-box;

  width: var(--woly-input-width);
  padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);

  color: var(--woly-color, #000000);

  font-size: var(--woly-font-size, 16px);
  line-height: var(--woly-line-height, 24px);

  background: var(--woly-background, transparent);
  border-color: var(--woly-border, var(--woly-background, #000000));
  border-style: solid;

  border-width: var(--woly-border-width, 1px);
  border-radius: var(--woly-rounding, 3px);

  &:focus {
    border-color: var(--woly-border-focus, #000000);
    outline: none;
  }

  &:disabled {
    color: var(--woly-color-disabled, #ffffff);

    background: var(--woly-background-disabled, #ffffff);
    border-color: var(
      --woly-border-disabled,
      var(--woly-background-disabled, #000000)
    );
  }
` as StyledComponent<'input', Record<string, unknown>, InputProps & Variant>;
