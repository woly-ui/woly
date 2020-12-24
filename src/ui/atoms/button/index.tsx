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
 * --woly-button-color
 * --woly-button-background
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

  color: var(--woly-button-color, #ffffff);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);

  background-color: var(--woly-button-background, #000000);

  /* border: 1px solid var(--button-borders, #000000); */
  border: none;
  border-radius: var(--woly-rounding, 4px);

  &:hover,
  &:focus,
  &:active {
    border-color: var(--button-borders, #000000);
    outline: none;
  }

  & [data-icon] {
    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);
  }

  & > *:not(:first-child) {
    margin-left: var(--gap);
  }
` as StyledComponent<'button', Record<string, unknown>, ButtonProps & Variant>;
