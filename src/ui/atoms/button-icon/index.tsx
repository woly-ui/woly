import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  filled?: boolean;
}

const ButtonIconBase: React.FC<Props & Variant> = ({
  icon,
  onClick,
  filled = false,
  variant = 'secondary',
  ...p
}) => (
  <button data-filled={filled} data-variant={variant} onClick={onClick} type="button" {...p}>
    <span data-icon>{icon}</span>
  </button>
);

export const ButtonIcon = styled(ButtonIconBase)`
  --local-shape-color: var(--woly-canvas-default);
  --local-icon-size: var(--woly-line-height);
  --local-icon-color: var(--woly-canvas-text-default);
  --local-padding: calc(1px * var(--woly-component-level) * var(--woly-main-level));

  border: var(--woly-border) solid var(--local-shape-color);
  border-radius: var(--woly-rounding, 4px);
  cursor: pointer;
  padding: var(--local-padding);
  background: var(--local-shape-color);
  outline: none;

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      fill: var(--local-icon-color);
    }
    svg > g {
      stroke: var(--local-icon-color);
    }
  }

  &[data-filled='true'] {
    --local-shape-color: var(--woly-shape-default);
    --local-icon-color: var(--woly-shape-text-default);

    &:active {
      --local-shape-color: var(--woly-focus);
    }
    &:focus {
      --local-shape-color: var(--woly-shape-active);
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    }
    &:hover {
      --local-shape-color: var(--woly-shape-hover);
    }
    &:disabled {
      --local-shape-color: var(--woly-canvas-disabled);
    }
  }

  &[data-filled='false'] {
    &:active {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-focus);
    }

    &:focus {
      --local-shape-color: transparent;
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    }

    &:hover {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-shape-hover);
    }
  }

  &:disabled {
    pointer-events: none;
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<'button', Record<string, unknown>, Props & Variant>;
