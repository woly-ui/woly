import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-rounding 
 * --woly-font-size
 * --woly-padding

 * --woly-chip-background-color — color of the background
 * --woly-chip-color — color of the text
 * --woly-chip-focus — color of the focus
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
  <div className={className} data-variant={variant}>
    <button type="button" onClick={onClick} {...p}>
      {text}
    </button>
    <div>{icon}</div>
  </div>
);

export const Chip = styled(ChipBase)`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );
  --woly-line-height: 24px;
  --gap: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  font-size: var(--woly-font-size, 1rem);

  background-color: var(--woly-chip-background-color, #ffffff);
  border-radius: var(--woly-rounding, 4px);

  &:focus {
    background-color: var(--woly-chip-focus, #d5d5dc);
  }

  & > button:first-child {
    flex-grow: 1;
    padding: 0;

    color: var(--woly-chip-color, #000000);

    line-height: var(--woly-line-height, 24px);
    text-align: left;

    background-color: transparent;
    border: 0;
    border-radius: var(--woly-rounding, 4px);
    outline: none;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    margin-left: var(--gap, 6px);

    line-height: var(--woly-line-height, 24px);
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Variant>;
