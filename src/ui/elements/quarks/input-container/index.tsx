import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

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
  variant = 'default',
}) => (
  <div className={className} data-disabled={disabled} data-variant={variant}>
    {leftIcon && <span data-icon="left">{leftIcon}</span>}
    <div data-input="input">{children}</div>
    {rightIcon && <span data-icon="right">{rightIcon}</span>}
  </div>
);

export const InputContainer = styled(InputContainerBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical) -
      var(--woly-border-width)
  );

  --local-gap: var(--local-vertical);
  --local-compensate: var(--woly-const-m);

  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-canvas-text-hover);
  --local-icon-fill: var(--woly-canvas-text-active);
  --local-value-color: var(--woly-canvas-text-default);

  width: 100%;
  outline: none;

  padding: calc(var(--local-vertical) - var(--woly-border-width)) 0;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  background: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);

  [data-input='input'] {
    flex: 1;
    color: var(--local-value-color);

    padding: 0 var(--local-horizontal);

    input {
      padding: 0;
    }

    &:not(:only-child, :last-child) {
      padding-right: 0;
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

  [data-icon='left'] {
    padding: 0 0 0 calc(var(--local-horizontal) - var(--local-compensate));
  }

  [data-icon='right'] {
    padding: 0 calc(var(--local-horizontal) - var(--local-compensate)) 0 0;
  }

  [data-icon='left'] ~ [data-input='input'],
  [data-input='input'] ~ [data-icon='right'] {
    padding-left: var(--local-gap);
  }

  &:focus-within {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);

    [data-icon] {
      --local-icon-fill: var(--woly-canvas-text-default);
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
    --local-border-color: var(--woly-focus);
    --local-icon-fill: var(--woly-canvas-text-default);
    --local-border-color: var(--woly-focus);

    outline: none;
  }

  &[data-disabled='true'] {
    pointer-events: none;

    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-shape-disabled);
    --local-value-color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, InputContainerProps & Variant>;