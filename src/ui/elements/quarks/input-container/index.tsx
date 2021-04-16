import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  left?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  right?: React.ReactNode;
}

const InputContainerBase: React.FC<InputContainerProps & Variant> = ({
  left,
  className,
  children,
  isDisabled,
  right,
  variant = 'default',
}) => (
  <div className={className} data-variant={variant} data-disabled={isDisabled}>
    {left && <span data-icon="left">{left}</span>}
    <div data-content="content">{children}</div>
    {right && <span data-icon="right">{right}</span>}
  </div>
);

export const InputContainer = styled(InputContainerBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-border-color: var(--woly-neutral);
  --local-background-color: var(--woly-canvas-default);
  --local-value-color: var(--woly-canvas-text-default);

  width: 100%;
  outline: none;

  padding: var(--local-vertical) var(--local-horizontal);

  box-sizing: border-box;

  display: flex;
  align-items: center;

  background-color: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);

  [data-content='content'] {
    flex: 1;
    color: var(--local-value-color);
  }

  & [data-icon] {
    --local-icon-size: var(--woly-line-height);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }

  &:disabled {
    pointer-events: none;

    --local-border-color: var(--woly-shape-disabled);
    --local-value-color: var(--woly-canvas-text-disabled);
  }

  &:focus {
    --local-border-color: var(--woly-focus);
    box-shadow: 0 0 0 2px var(--woly-focus);
    outline: none;
  }

  &:hover {
    --local-border-color: var(--woly-shape-hover);
  }
` as StyledComponent<
  'div',
  Record<string, unknown>,
  InputContainerProps & Variant
>;
