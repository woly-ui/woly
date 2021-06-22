import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { Box } from 'ui/atoms';

interface InputContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const InputContainerBase: React.FC<InputContainerProps & Variant> = ({
  children,
  className,
  disabled = 'false',
  leftIcon,
  rightIcon,
  variant = 'secondary',
}) => (
  <div className={className} data-disabled={disabled} data-variant={variant}>
    {leftIcon && <span data-icon="left">{leftIcon}</span>}
    <div data-input="input">{children}</div>
    {rightIcon && <span data-icon="right">{rightIcon}</span>}
  </div>
);

export const InputContainer = styled(InputContainerBase)`
  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-canvas-text-hover);
  --local-icon-fill: var(--woly-canvas-text-active);
  --local-value-color: var(--woly-canvas-text-default);

  ${Box}

  display: flex;
  align-items: center;

  box-sizing: border-box;

  width: 100%;

  background: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  [data-input='input'] {
    flex: 1;

    color: var(--local-value-color);

    input {
      padding: 0;
    }
  }

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;

    svg > path {
      fill: var(--local-icon-fill);
    }
  }

  &:hover {
    --local-border-color: var(--woly-shape-hover);
  }

  &:active {
    --local-border-color: var(--woly-focus);
    --local-icon-fill: var(--woly-canvas-text-default);
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);

    --local-border-color: var(--woly-focus);
    --local-icon-fill: var(--woly-canvas-text-default);
  }

  &[data-disabled='true'] {
    pointer-events: none;

    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-shape-disabled);
    --local-value-color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, InputContainerProps & Variant>;
