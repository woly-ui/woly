import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --rounding 
 * --font-size
 * --padding

 * --chip-background-color — color of the background
 * --chip-color — color of the text
 * --chip-focus — color of the focus
 */

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: never;
  className?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  variant?: string;
}

const ChipBase: React.FC<ChipProps> = ({
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
  --vertical: calc(1px * var(--component-level) * var(--main-level));
  --horizontal: calc(
    var(--const-m) + (1px * var(--main-level)) + var(--vertical)
  );
  --line-height: 24px;
  --gap: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  font-size: var(--font-size, 1rem);

  background-color: var(--chip-background-color, #ffffff);
  border-radius: var(--rounding, 4px);

  &:focus {
    background-color: var(--chip-focus, #d5d5dc);
  }

  & > button:first-child {
    flex-grow: 1;
    padding: 0;

    color: var(--chip-color, #000000);

    line-height: var(--line-height, 24px);
    text-align: left;

    background-color: transparent;
    border: 0;
    border-radius: var(--rounding, 4px);
    outline: none;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    margin-left: var(--gap, 6px);

    line-height: var(--line-height, 24px);
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps>;
