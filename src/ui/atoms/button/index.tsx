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
  left?: React.ReactNode;
  right?: React.ReactNode;
  text: React.ReactNode;
}

const ButtonBase: React.FC<ButtonProps & Variant> = ({
  left,
  right,
  text,
  type = 'button',
  variant = 'default',
  ...p
}) => (
  <button type={type} data-variant={variant} {...p}>
    {left && <span data-icon="left">{left}</span>}
    <span>{text}</span>
    {right && <span data-icon="right">{right}</span>}
  </button>
);

export const Button = styled(ButtonBase)`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );
  --gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  display: flex;
  flex-wrap: nowrap;
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  color: var(--woly-color, #ffffff);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);

  background-color: var(--woly-background, #000000);

  border-color: var(--woly-border, #000000);
  border-style: solid;
  border-width: var(--woly-border-width, 0);
  border-radius: var(--woly-rounding, 4px);

  &:hover {
    color: var(--woly-color-hover, #ffffff);

    background-color: var(--woly-background-hover, #000000);
    border-color: var(--woly-border-hover, #000000);
    outline: none;
  }

  &:focus,
  &:active {
    color: var(--woly-color-focus, #ffffff);

    background-color: var(--woly-background-focus, #000000);
    border-color: var(--woly-border-focus, #000000);
    outline: none;
  }

  &:disabled {
    color: var(--woly-color-disabled, #ffffff);

    background-color: var(--woly-background-disabled, #000000);
    border-color: var(--woly-border-disabled, #000000);
    outline: none;
  }

  & [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);
  }

  & > *:not(:first-child) {
    margin-left: var(--gap);
  }
` as StyledComponent<'button', Record<string, unknown>, ButtonProps & Variant>;
