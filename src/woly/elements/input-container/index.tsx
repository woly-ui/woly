import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { levelDowngrade } from 'lib/level-downgrade';

import { box } from '../box';

export interface InputContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  rightIcon?: React.ReactNode;
}

export const InputContainerBase: React.FC<InputContainerProps & Priority> = ({
  children,
  className,
  disabled = 'false',
  leftIcon,
  onClick,
  priority = 'secondary',
  rightIcon,
}) => (
  <InputContainerStyle
    {...levelDowngrade.setup()}
    className={className}
    data-disabled={disabled}
    data-priority={priority}
    onClick={onClick}
  >
    {leftIcon && (
      <span data-element="icon" data-box-role="icon">
        {leftIcon}
      </span>
    )}
    <div data-element="input">{children}</div>
    {rightIcon && (
      <span {...levelDowngrade.use({ diff: 2 })} data-element="icon" data-box-role="icon">
        {rightIcon}
      </span>
    )}
  </InputContainerStyle>
);

export const InputContainer = styled(InputContainerBase)`
  ${box}
` as StyledComponent<'div', Record<string, unknown>, InputContainerProps & Priority>;

export const InputContainerStyle = styled.div`
  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-shape-default);
  --local-icon-fill: var(--woly-canvas-text-default);

  display: flex;
  align-items: center;

  box-sizing: border-box;

  width: 100%;

  background: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  [data-element='input'] {
    flex: 1;

    input {
      padding: 0;
    }
  }

  [data-element='icon'] {
    display: flex;
    align-items: center;
    justify-content: center;

    svg > path {
      fill: var(--local-icon-fill);
    }
  }

  &:hover {
    --local-border-color: var(--woly-shape-hover);
    --local-icon-fill: var(--woly-canvas-text-default);
  }

  &:active {
    --local-border-color: var(--woly-shape-active);
    --local-icon-fill: var(--woly-canvas-text-default);
    outline: none;
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);

    --local-border-color: var(--woly-shape-active);
    --local-icon-fill: var(--woly-canvas-text-default);
  }

  &[data-disabled='true'] {
    input {
      color: var(--woly-canvas-text-disabled);
    }

    pointer-events: none;

    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-canvas-disabled);
    --local-icon-fill: var(--woly-canvas-text-disabled);
  }
`;
