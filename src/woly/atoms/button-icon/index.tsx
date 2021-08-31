import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { forwardRef } from 'react';

type BaseButtonIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Priority;

export type ButtonIconProps = BaseButtonIconProps & {
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  weight?: string;
};

const ButtonIconBase = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, onClick, priority = 'secondary', weight = 'fill', ...rest }, buttonIconRef) => (
    <button
      ref={buttonIconRef}
      data-priority={priority}
      data-weight={weight}
      onClick={onClick}
      role="button"
      type="button"
      {...rest}
    >
      <span data-element="icon" data-box-role="icon">
        {icon}
      </span>
    </button>
  ),
);

export const ButtonIcon = styled(ButtonIconBase)<ButtonIconProps>`
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

  [data-element='icon'] {
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

  &:focus {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }

  &[data-weight='fill'] {
    --local-shape-color: var(--woly-shape-default);
    --local-icon-color: var(--woly-shape-text-default);
    --local-border-color: transparent;

    background: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon'] > svg > path {
      fill: var(--local-icon-color);
    }

    [data-element='icon'] > svg > g {
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

    &:disabled {
      pointer-events: none;
      --local-shape-color: var(--woly-shape-disabled);
      --local-icon-color: var(--woly-shape-text-default);
    }
  }

  &[data-weight='outline'] {
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-shape-default);
    --local-border-color: var(--local-icon-color);

    background: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon'] > svg > path {
      fill: var(--local-icon-color);
    }

    [data-element='icon'] > svg > g {
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

    &:disabled {
      pointer-events: none;
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-shape-text-disabled);
    }
  }

  &[data-weight='goast'] {
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-shape-default);
    --local-border-color: transparent;

    --local-shadow: var(--woly-border-width) var(--woly-border-width)
      calc(var(--woly-border-width) * 4) hsla(0, 0%, 100%, 50%);

    background: var(--local-shape-color);
    border-color: var(--local-border-color);
    box-shadow: var(--local-shadow);

    [data-element='icon'] > svg > path {
      fill: var(--local-icon-color);
    }

    [data-element='icon'] > svg > g {
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

    &:disabled {
      pointer-events: none;
      --local-shape-color: var(--woly-shape-disabled);
      --local-icon-color: var(--woly-shape-text-disabled);
    }
  }

  &[data-weight='transparent'] {
    --local-shape-color: transparent;
    --local-icon-color: var(--woly-shape-default);
    --local-border-color: transparent;

    background: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon'] > svg > path {
      fill: var(--local-icon-color);
    }

    [data-element='icon'] > svg > g {
      stroke: var(--local-icon-color);
    }

    &:hover {
      --local-shape-color: var(--woly-canvas-disabled);
      --local-icon-color: var(--woly-shape-hover);
    }

    &:active {
      --local-shape-color: var(--woly-shape-text-disabled);
      --local-icon-color: var(--woly-canvas-active);
    }

    &:disabled {
      pointer-events: none;
      --local-shape-color: transparent;
      --local-icon-color: var(--woly-canvas-text-disabled);
    }
  }
`;
