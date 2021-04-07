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
  icon?: React.ReactNode;
  onActionClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ChipBase: React.FC<ChipProps & Variant> = ({
  action,
  children,
  className,
  disabled,
  icon,
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
        {icon && <div data-icon="left">{icon}</div>}
        {children}
        {action && (
          <>
            <button
              data-icon="right"
              data-variant={variant}
              disabled={disabled}
              onClick={onActionClick}
              type="button"
            >
              {action}
            </button>
            <div data-type="stub"></div>
          </>
        )}
      </div>
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
  --woly-line-height: 24px;

  position: relative;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  background-color: var(--woly-background, #b0a3f4);
  color: var(--woly-color, #ffffff);

  border-radius: var(--woly-rounding, 3px);

  [role] {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 20px);

    border-radius: var(--woly-rounding, 3px);

    padding: 0 var(--woly-horizontal, 6px);

    outline: none;
  }

  [role='button']:active {
    color: var(--woly-color-focus, #ffffff);
    background-color: var(--woly-background-focus, #9381f1);
    border-color: var(--woly-border-focus, transparent);
  }

  [role='button']:focus {
    box-shadow: 0 0 0 1px var(--woly-border-focus, #9381f1);
  }

  [role='button']:hover {
    color: var(--woly-color-hover, #ffffff);
    background-color: var(--woly-background-hover, #9381f1);
    opacity: 0.5;
    border-color: var(--woly-border-hover, transparent);
    outline: none;
  }

  &[data-disabled='true'] {
    color: var(--woly-color-disabled, #c0c0c0);
    background: var(--woly-background-disabled, #f5f5f5);
    border-color: var(--woly-background-disabled, transparent);
    pointer-events: none;

    [data-icon] {
      svg > path {
        fill: var(--woly-color, #c0c0c0);
      }
    }
  }

  [data-icon],
  [data-type='stub'] {
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);

    background: var(--woly-background-disabled, transparent);
    border-radius: var(--woly-rounding, 3px);

    border-color: var(--woly-border, transparent);
    border-style: solid;
    border-width: var(--woly-border-width, 0);
    border-radius: var(--woly-rounding, 3px);

    outline: none;

    svg > path {
      fill: var(--woly-color, #ffffff);
    }
  }

  [data-type='stub'] {
    visibility: hidden;
    position: static;
    flex-shrink: 0;
  }

  [data-icon='right'] {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      background-color: var(--woly-background-hover, #9381f1);
      opacity: 0.5;
    }

    &:active {
      background-color: var(--woly-background-hover, #9381f1);
    }

    &:focus {
      box-shadow: 0 0 0 1px var(--woly-border-focus, #9381f1);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Variant>;
