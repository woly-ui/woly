import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-rounding
 * --woly-border-width
 * --woly-line-height
 *
 * --woly-background
 * --woly-border
 *
 * --woly-background-hover
 * --woly-border-hover
 *
 * --woly-background-focus
 * --woly-border-focus
 *
 * --woly-background-disabled
 * --woly-border-disabled
 */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonIconBase: React.FC<Props & Variant> = ({
  icon,
  onClick,
  variant = 'default',
  ...p
}) => (
  <button data-variant={variant} onClick={onClick} type="button" {...p}>
    <span>{icon}</span>
  </button>
);

export const ButtonIcon = styled(ButtonIconBase)`
  --woly-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding: var(--woly-vertical, 6.4px) var(--woly-horizontal, 6.4px);

  background-color: var(--woly-background, transparent);
  border-color: var(--woly-border, #000000);
  border-style: solid;
  border-width: var(--woly-border-width, 0);

  border-radius: var(--woly-rounding, 4px);
  cursor: pointer;

  span {
    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);
  }

  &:hover {
    background-color: var(--woly-background-hover, #000000);
    border-color: var(--woly-border-hover, #000000);
    outline: none;
  }

  &:focus,
  &:active {
    background-color: var(--woly-background-focus, #000000);
    border-color: var(--woly-border-focus, #000000);
    outline: none;
  }

  &:disabled {
    background-color: var(--woly-background-disabled, #000000);
    border-color: var(--woly-border-disabled, #000000);
    outline: none;
  }
  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
` as StyledComponent<'button', Record<string, unknown>, Props & Variant>;
