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

interface ChipProps {
  action?: React.ReactNode;
  children?: string;
  className?: string;
  disabled?: boolean;
  onActionClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ChipBase: React.FC<ChipProps & Variant> = ({
  action,
  children,
  className,
  disabled,
  onActionClick,
  onClick,
  variant = 'default',
}) => {
  const divRole = onClick ? 'button' : 'div';
  const divTabIndex = onClick ? 1 : 0 ;
  return(
    <div className={className} data-disabled={disabled}>
      <div
        data-block="label"
        data-variant={variant}
        onClick={onClick}
        role={divRole}
        tabIndex={divTabIndex}
       >
        {children}
      </div>
      { action && 
        <button
          data-icon="right"
          data-variant={variant}
          disabled={disabled}
          onClick={onActionClick}
          type="button" 
        >
          {action}
        </button>}
    </div>
  )
};

export const Chip = styled(ChipBase)`
  --woly-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: 9px;
  --woly-line-height: 24px;
  --woly-right-offset: calc(var(--woly-line-height) + var(--woly-gap));
  
  position: relative;

  [role] {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.action ? "space-between" : "center")};

    color: var(--woly-color, #ffffff);

    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 24px);

    background-color: var(--woly-background, #000000);
    border-color: var(--woly-border, #000000);
    border-style: solid;
    border-width: var(--woly-border-width, 0);

    border-radius: var(--woly-rounding, 4px);

    padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6px);
    padding-right: ${(props) => (props.action && "var(--woly-right-offset)")};
  }

  [role]:hover {
    color: var(--woly-color-hover, #ffffff);

    background-color: var(--woly-background-hover, #000000);
    border-color: var(--woly-border-hover, #000000);
    outline: none;
    cursor: pointer;
  }

  [role='button']:focus,
  [role='button']:active {
    color: var(--woly-color-focus, #ffffff);

    background-color: var(--woly-background-focus, #000000);
    border-color: var(--woly-border-focus, #000000);
    outline: none;
  }

  
  &[data-disabled='true'] [role] {
    color: var(--woly-color-disabled, #ffffff);
    background: var(--woly-background-disabled, #ffffff);
    border-color: var(
      --woly-border-disabled,
      var(--woly-background-disabled, #000000)
    );
    outline: none;
    pointer-events: none;
  }

  &[data-disabled='true'] [data-icon]{
    pointer-events: none;
  }

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    right: var(--woly-gap, 9px);
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: var(--woly-line-height, 12px);
    height: var(--woly-line-height, 12px);
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Variant>;
