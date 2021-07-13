/* eslint-disable react/button-has-type */
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

export type ButtonPriorities =
  | 'secondary'
  | 'primary'
  | 'default'
  | 'transparent'
  | 'danger'
  | 'accent'
  | 'success';
export type ButtonSizes = 'default' | 'small';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  outlined?: boolean;
  text: React.ReactNode;
}

const ButtonBase: React.FC<ButtonProps & Priority> = ({
  fullWidth = false,
  icon,
  outlined = false,
  priority = 'secondary',
  text,
  type = 'button',
  ...p
}) => (
  <button
    type={type}
    data-full-width={fullWidth}
    data-outlined={outlined}
    data-priority={priority}
    {...p}
  >
    {icon && <span data-icon="button">{icon}</span>}
    <span data-text>{text}</span>
  </button>
);

export const Button = styled(ButtonBase)`
  ${box}
  --local-text-color: var(--woly-shape-text-default);
  --local-shape-color: var(--woly-shape-default);
  --local-border-color: var(--woly-shape-default);

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  box-sizing: border-box;
  padding: 0;

  color: var(--local-text-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  background-color: var(--local-shape-color);
  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  &[data-outlined='true'] {
    color: var(--local-shape-color);

    background: transparent;

    svg > path {
      fill: var(--local-shape-color);
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  [data-icon='button'] {
    --local-icon-size: var(--woly-line-height);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }

  svg > path {
    fill: var(--local-text-color);
  }

  &:hover {
    --local-text-color: var(--woly-shape-text-hover);
    --local-border-color: var(--woly-shape-hover);
    --local-shape-color: var(--woly-shape-hover);
  }

  &:active {
    --local-text-color: var(--woly-shape-text-active);
    --local-border-color: var(--woly-shape-active);
    --local-shape-color: var(--woly-shape-active);
  }

  &:focus {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &:disabled {
    --local-text-color: var(--woly-shape-text-disabled);
    --local-border-color: var(--woly-shape-disabled);
    --local-shape-color: var(--woly-shape-disabled);
  }
` as StyledComponent<'button', Record<string, unknown>, ButtonProps & Priority>;
