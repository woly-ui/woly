import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

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

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  className?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const ChipBase: React.FC<ChipProps & Variant> = ({
  className,
  icon,
  onClick,
  text,
  variant = 'default',
  ...p
}) => (
  <>
    <button
      type="button"
      onClick={onClick}
      className={className}
      data-variant={variant}
      {...p}
    >
      {text}
      <span data-icon="right-icon">{icon}</span>
    </button>
  </>
);

export const Chip = styled(ChipBase)`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );
  --gap: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  color: var(--woly-color, #ffffff);

  font-size: var(--woly-font-size, 12px);
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
    margin-left: var(--gap, 6px);

    line-height: var(--woly-line-height, 24px);
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Variant>;
