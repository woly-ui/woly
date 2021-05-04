/* eslint-disable react/button-has-type */
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

export type ButtonVariants = 'secondary' | 'primary' | 'destructive' | 'text';
export type ButtonSizes = 'default' | 'small';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  className?: string;
  icon?: React.ReactNode;
  text: React.ReactNode;
  outlined?: boolean;
}

const ButtonBase: React.FC<ButtonProps & Variant> = ({
  icon,
  text,
  type = 'button',
  variant = 'secondary',
  outlined = false,
  ...p
}) => (
  <button type={type} data-outlined={outlined} data-variant={variant} {...p}>
    {icon && <span data-icon="left">{icon}</span>}
    <span data-text>{text}</span>
  </button>
);

export const Button = styled(ButtonBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: var(--local-vertical);
  --local-compensate: var(--woly-const-m);

  --local-text-color: var(--woly-shape-text-default);
  --local-shape-color: var(--woly-shape-default);
  --local-border-color: var(--woly-shape-default);

  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  padding: var(--local-vertical) 0;
  justify-content: center;

  color: var(--local-text-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  background-color: var(--local-shape-color);
  border-color: var(--local-border-color);
  border-style: solid;
  border-width: var(--woly-border-width);
  border-radius: var(--woly-rounding);
  outline: none;

  &[data-outlined='true'] {
    background-color: transparent;
    color: var(--local-shape-color);
      svg > path {
        fill: var(--local-shape-color);
      }
  }

  [data-icon] {
    --local-icon-size: var(--woly-line-height);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
    padding: 0 0 0 calc(var(--local-horizontal) - var(--local-compensate));
  }

  [data-text] {
    padding: 0 var(--local-horizontal);
  }

  span[data-icon='left'] + span[data-text] {
    padding-left: var(--local-gap);
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
    box-shadow: 0 0 0 1.5px var(--woly-focus);
  }

  &:disabled {
    --local-text-color: var(--woly-shape-text-disabled);
    --local-border-color: var(--woly-shape-disabled);
    --local-shape-color: var(--woly-shape-disabled);
  }
` as StyledComponent<'button', Record<string, unknown>, ButtonProps & Variant>;
