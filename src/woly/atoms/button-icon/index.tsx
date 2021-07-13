import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  weight?: string;
}

const ButtonIconBase: React.FC<Props & Priority> = ({
  icon,
  onClick,
  priority = 'secondary',
  weight = 'fill',
  ...p
}) => (
  <button
    data-priority={priority}
    data-weight={weight}
    onClick={onClick}
    role="button"
    type="button"
    {...p}
  >
    <span data-icon="button-icon">{icon}</span>
  </button>
);

export const ButtonIcon = styled(ButtonIconBase)`
  ${box}

  --local-icon-size: var(--woly-line-height);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;

  border-style: solid;

  border-width: var(--woly-border-width);

  border-radius: var(--woly-rounding);
  outline: none;

  [data-icon='button-icon'] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &[data-weight='fill'] {
    --local-shape-color: var(--woly-shape-default);
    --local-icon-color: var(--woly-shape-text-default);

    background: var(--local-shape-color);
    border-color: var(--local-shape-color);

    [data-icon] > svg > path {
      fill: var(--local-icon-color);
    }
    [data-icon] > svg > g {
      stroke: var(--local-icon-color);
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
  }

  &[data-weight='outline'] {
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-shape-default);

    background: var(--local-shape-color);
    border-color: var(--local-icon-color);

    [data-icon] > svg > path {
      fill: var(--local-icon-color);
    }
    [data-icon] > svg > g {
      stroke: var(--local-icon-color);
    }

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

  &[data-weight='goast'] {
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-shape-text-default);
    --local-border-color: var(--woly-shape-text-default);

    --local-shadow: var(--woly-border-width) var(--woly-border-width)
      calc(var(--woly-border-width) * 4) hsla(0, 0%, 100%, 50%);

    background: var(--local-shape-color);
    border-color: var(--local-border-color);
    box-shadow: var(--local-shadow);

    [data-icon] > svg > path {
      fill: var(--local-icon-color);
    }
    [data-icon] > svg > g {
      stroke: var(--local-icon-color);
    }

    &:hover {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-shape-text-hover);
      --local-border-color: var(--woly-shape-text-hover);
    }

    &:active {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-shape-text-active);
      --local-border-color: var(--woly-shape-text-active);
    }

    &:focus {
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-shape-text-active);
      --local-border-color: var(--woly-shape-text-active);
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
    }

    &:disabled {
      pointer-events: none;
      --local-shape-color: var(--woly-shape-text-disabled);
      --local-icon-color: var(--woly-shape-disabled);
    }
  }

  &[data-weight='transparent'] {
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-shape-default);

    background: var(--local-shape-color);
    border-color: var(--local-shape-color);

    [data-icon] > svg > path {
      fill: var(--local-icon-color);
    }
    [data-icon] > svg > g {
      stroke: var(--local-icon-color);
    }

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
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-canvas-text-disabled);
    }
  }
` as StyledComponent<'button', Record<string, unknown>, Props & Priority>;
