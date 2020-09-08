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

interface ChipProps {
  children?: never;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Chip: React.FC<ChipProps & { className: string }> = ({
  className,
  icon,
  onClick,
  text,
  ...p
}) => (
  <div className={className}>
    <button type="button" onClick={onClick} {...p}>
      {text}
    </button>
    {icon}
  </div>
);

export const Base = styled(Chip)`
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

  color: var(--chip-color, #000000);
  font-size: var(--font-size, 1rem);

  background-color: var(--chip-background-color, #ffffff);
  border-radius: var(--rounding, 4px);

  &:focus {
    background-color: var(--chip-focus, #d5d5dc);
  }

  & > button:first-child {
    flex-grow: 1;
    padding: 0;

    line-height: var(--line-height, 24px);
    text-align: left;

    background-color: transparent;
    border: 0;
    border-radius: var(--rounding, 4px);
    outline: none;
  }

  & > button:nth-child(2) {
    margin-left: var(--gap, 6px);
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps>;
