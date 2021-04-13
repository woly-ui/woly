import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  type: 'text' | 'password' | 'email';
}

const InputBase: React.FC<InputProps & Variant> = ({
  className,
  name,
  onChange,
  type = 'text',
  variant = 'default',
  ...p
}) => (
  <div data-variant={variant} className={className}>
    <input name={name} onChange={onChange} type={type} {...p} />
  </div>
);

export const Input = styled(InputBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-border-color: var(--woly-neutral);
  --local-background-color: var(--woly-canvas-default);
  --local-value-color: var(--woly-canvas-text-default);

  box-sizing: border-box;

  color: var(--woly-canvas-text-default);

  font-size: var(--woly-font-size, 16px);
  line-height: var(--woly-line-height, 24px);

  background: var(--woly-background, transparent);

  input {
    width: 100%;
    box-sizing: border-box;
    border: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--woly-rounding);
    padding: var(--local-vertical) var(--local-horizontal);
    background-color: var(--local-background-color);
    outline: none;
    color: var(--local-value-color);

    &:disabled {
      --local-border-color: var(--woly-shape-disabled);
      --local-value-color: var(--woly-canvas-text-disabled);
    }

    &:focus {
      --local-border-color: var(--woly-shape-active);
      box-shadow: 0 0 0 2px var(--woly-focus);
      outline: none;
    }

    &:hover {
      --local-border-color: var(--woly-shape-hover);
    }
  }
` as StyledComponent<'input', Record<string, unknown>, InputProps & Variant>;
