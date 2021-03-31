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
  const chipRole = onClick ? 'button' : 'div';
  const chipTabIndex = onClick ? 1 : 0;

  return (
    <div className={className} data-disabled={disabled}>
      <div
        data-block="label"
        data-variant={variant}
        onClick={onClick}
        role={chipRole}
        tabIndex={chipTabIndex}
      >
        {children}
      </div>
      {action && (
        <button
          data-block="label"
          data-icon="right"
          data-variant={variant}
          disabled={disabled}
          onClick={onActionClick}
          type="button"
        >
          {action}
        </button>
      )}
    </div>
  );
};

export const Chip = styled(ChipBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
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
    justify-content: ${(props) => (props.action ? 'space-between' : 'center')};

    color: var(--woly-color, #ffffff);

    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 24px);

    background-color: var(--woly-background, #B0A3F4);
    border-color: var(--woly-border, #000000);
    border-style: solid;
    border-width: var(--woly-border-width, 0px);

    border-radius: var(--woly-rounding, 3px);

    padding: var(--woly-vertical, 0px) var(--woly-horizontal, 9px); 
    padding-right: ${(props) => props.action && 'var(--woly-right-offset)'};

    outline: none;
  }

  [role='button']:hover {
    color: var(--woly-color-hover, #ffffff);

    background-color: var(--woly-background-hover, #000000);
    border-color: var(--woly-border-hover, #000000);
    outline: none;
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
    background: var(--woly-background-disabled, #f5f5f5);
    border: none;

    outline: none;
    pointer-events: none;

    svg > path {
      fill: var(--woly-color, #c0c0c0);
    }
  }

  &[data-disabled='true'] [data-icon] {
    pointer-events: none;
  }

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    right: var(--woly-gap, 9px);
    
    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);

    border-radius: 3px; 
    border-color: transparent;
    background: transparent;

    outline: none;

    svg > path {
      fill: var(--woly-color, #ffffff);
    }

    &:hover{
      background: #9381F1;
      opacity: 0.3;
    }

    &:active{
      background: #9381F1;
    }

    &:focus{
      background: #9381F1;
      border: 1.5px solid #9381F1;
    }
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Variant>;
