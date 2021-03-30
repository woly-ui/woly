/* eslint-disable react/button-has-type */
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

export type ButtonVariants = 'default' | 'primary' | 'destructive' | 'text';
export type ButtonSizes = 'default' | 'small';

/**
 * --woly-rounding — in pixels
 * --woly-font-size
 * --woly-line-height
 * --woly-border-width
 *
 * --woly-background
 * --woly-border
 * --woly-color
 *
 * --woly-background-hover
 * --woly-border-hover
 * --woly-color-hover
 *
 * --woly-background-focus
 * --woly-border-focus
 * --woly-color-focus
 *
 * --woly-background-disabled
 * --woly-border-disabled
 * --woly-color-disabled
 *
 */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  className?: string;
  icon?: React.ReactNode;
  text: React.ReactNode;
}

const ButtonBase: React.FC<ButtonProps & Variant> = ({
  icon,
  text,
  type = 'button',
  variant = 'default',
  ...p
}) => (
  <button type={type} data-variant={variant} {...p}>
    {icon && <span data-icon="left">{icon}</span>}
    <span data-text>{text}</span>
  </button>
);

export const Button = styled(ButtonBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: var(--woly-vertical, 6px);
  --woly-compensate: var(--woly-const-m);

  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  padding: var(--woly-vertical, 16px) 0;
  justify-content: center;

  color: var(--woly-color, #ffffff);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);

  background-color: var(--woly-background, #000000);

  border-color: var(--woly-border, #000000);
  border-style: solid;
  border-width: var(--woly-border-width, 0);
  border-radius: var(--woly-rounding, 4px);
  outline: none;

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);
    padding: 0 0 0 calc(var(--woly-horizontal) - var(--woly-compensate));
  }

  [data-text] {
    padding: 0 var(--woly-horizontal, 6px);
  }

  span[data-icon='left'] + span[data-text] {
    padding-left: var(--woly-gap, 6px);
  }

  svg > path {
    fill: var(--woly-color, #ffffff);
  }

  &:hover {
    color: var(--woly-color-hover, #ffffff);
    background-color: var(--woly-background-hover, #000000);
    border-color: var(--woly-border-hover, #000000);
    svg > path {
      fill: var(--woly-color-hover, #ffffff);
    }
  }

  &:active {
    color: var(--woly-color-active, #ffffff);
    background-color: var(--woly-background-active, #000000);
    border-color: var(--woly-border-active, #000000);
    svg > path {
      fill: var(--woly-color-active, #ffffff);
    }
  }

  &:focus {
    color: var(--woly-color-focus, #ffffff);
    background-color: var(--woly-background-focus, #000000);
    border-color: var(--woly-border-focus, #000000);
    svg > path {
      fill: var(--woly-color-focus, #ffffff);
    }
  }

  &:disabled {
    color: var(--woly-color-disabled, #ffffff);

    background-color: var(--woly-background-disabled, #000000);
    border-color: var(--woly-border-disabled, #000000);
    svg > path {
      fill: var(--woly-color-disabled, #ffffff);
    }
  }
` as StyledComponent<'button', Record<string, unknown>, ButtonProps & Variant>;
