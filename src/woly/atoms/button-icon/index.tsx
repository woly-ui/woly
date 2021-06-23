import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  outlined?: boolean;
}

const ButtonIconBase: React.FC<Props & Priority> = ({
  icon,
  onClick,
  outlined = false,
  priority = 'secondary',
  ...p
}) => (
  <button
    data-outlined={outlined}
    data-priority={priority}
    onClick={onClick}
    role="button"
    type="button"
    {...p}
  >
    <span data-icon>{icon}</span>
  </button>
);

export const ButtonIcon = styled(ButtonIconBase)`
  ${box}
  --local-shape-color: var(--woly-shape-default);
  --local-icon-size: var(--woly-line-height);
  --local-icon-color: var(--woly-shape-text-default);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;

  background: var(--local-shape-color);
  border: var(--woly-border-width) solid var(--local-shape-color);
  border-radius: var(--woly-rounding);
  outline: none;

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg {
      width: 100%;
      height: 100%;
    }

    svg > path {
      fill: var(--local-icon-color);
    }

    svg > g {
      stroke: var(--local-icon-color);
    }
  }

  &:hover {
    --local-shape-color: var(--woly-shape-hover);
    --local-icon-color: var(--woly-shape-text-hover);
  }

  &:active {
    --local-shape-color: var(--woly-shape-active);
    --local-icon-color: var(--woly-shape-text-active);
  }

  &:focus {
    --local-shape-color: var(--woly-shape-active);
    --local-icon-color: var(--woly-shape-text-active);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }

  &:disabled {
    pointer-events: none;
    --local-shape-color: var(--woly-canvas-disabled);
    --local-icon-color: var(--woly-shape-text-disabled);
  }

  &[data-outlined='true'] {
    --local-shape-color: var(--woly-canvas-default);
    --local-icon-color: var(--woly-shape-default);

    &:hover {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-shape-hover);
    }

    &:active {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-canvas-active);
    }

    &:focus {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-canvas-active);
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
    }

    &:disabled {
      pointer-events: none;
      --local-shape-color: var(--woly-shape-text-disabled);
      --local-icon-color: var(--woly-canvas-text-disabled);
    }
  }
` as StyledComponent<'button', Record<string, unknown>, Props & Priority>;
