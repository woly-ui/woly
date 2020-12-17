/* eslint-disable react/button-has-type */
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export type ButtonVariants = 'default' | 'primary' | 'destructive' | 'text';
export type ButtonSizes = 'default' | 'small';

/**
 * --rounding — in pixels
 * --font-size
 * --line-height
 * --spacing-vertical
 * --spacing-horizontal
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  text: React.ReactNode;
  variant?: string;
}

const ButtonBase: React.FC<ButtonProps> = ({
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
  --vertical: calc(1px * var(--component-level) * var(--main-level));
  --horizontal: calc(
    var(--const-m) + (1px * var(--main-level)) + var(--vertical)
  );
  --line-height: 24px;
  --gap: calc(
    (1px * var(--main-level)) +
      (1px * var(--main-level) * var(--component-level))
  );

  display: flex;
  flex-wrap: nowrap;
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  color: var(--button-color, #ffffff);
  font-size: var(--font-size, 15px);
  line-height: var(--line-height, 24px);

  background-color: var(--button-background, #000000);

  /* border: 1px solid var(--button-borders, #000000); */
  border: none;
  border-radius: var(--rounding, 4px);

  &:hover,
  &:focus,
  &:active {
    border-color: var(--button-borders, #000000);
    outline: none;
  }

  & [data-icon] {
    width: var(--line-height, 24px);
    height: var(--line-height, 24px);
  }

  & > *:not(:first-child) {
    margin-left: var(--gap);
  }
` as StyledComponent<'button', Record<string, unknown>, ButtonProps>;
