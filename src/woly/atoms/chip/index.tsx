import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { forwardRef } from 'react';

type BaseChipProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type ChipProps = BaseChipProps & {
  text?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  outlined?: boolean;
  rightIcon?: React.ReactNode;
};

const ChipBase = forwardRef<HTMLDivElement, ChipProps>(
  (
    { disabled, leftIcon, onClick, outlined, priority = 'secondary', rightIcon, text, ...rest },
    chipRef,
  ) => {
    const chipRole = onClick ? 'button' : 'div';
    const chipTabIndex = onClick ? 0 : -1;

    const onKeyDown = React.useCallback(
      (event) => {
        if (event.key === 'Enter' && onClick) {
          onClick(event);
        }
      },
      [onClick],
    );

    return (
      <div
        ref={chipRef}
        data-disabled={disabled}
        data-outlined={outlined}
        data-priority={priority}
        {...rest}
      >
        {leftIcon && (
          <div data-element="icon" data-box-role="icon" onClick={onClick} onKeyDown={onKeyDown}>
            {leftIcon}
          </div>
        )}
        <div
          data-text="chip-text-content"
          onClick={onClick}
          onKeyDown={onKeyDown}
          role={chipRole}
          tabIndex={chipTabIndex}
        >
          {text}
        </div>
        {rightIcon && (
          <div data-element="action-icon" data-box-role="icon">
            {rightIcon}
          </div>
        )}
      </div>
    );
  },
);

export const Chip = styled(ChipBase)<ChipProps>`
  ${box};

  --local-shape-color: var(--woly-shape-default);
  --local-icon-size: var(--woly-line-height);
  --local-text-color: var(--woly-shape-text-default);
  --local-border-color: transparent;

  display: flex;
  align-items: center;

  box-sizing: border-box;

  color: var(--local-text-color);
  font-size: var(--woly-font-size);

  background-color: var(--local-shape-color);
  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  [data-element='text'] {
    display: flex;
    flex: 1;

    line-height: var(--woly-line-height);

    outline: none;
  }

  [data-element='icon'] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: var(--local-text-color);
      }
    }
  }

  [data-element='action-icon'] {
    --woly-component-level: 0;
  }

  &[data-outlined='true'] {
    --local-shape-color: transparent;
    --local-text-color: var(--woly-shape-default);
    --local-border-color: var(--woly-shape-default);

    &:hover {
      --local-shape-color: transparent;
      --local-text-color: var(--woly-shape-hover);
    }

    &:active,
    &:focus-within {
      --local-shape-color: transparent;
      --local-text-color: var(--woly-shape-active);
    }
  }

  &[role='button']:focus-within {
    --local-shape-color: var(--woly-shape-active);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &[role='button']:hover {
    --local-text-color: var(--woly-shape-text-hover);
    --local-shape-color: var(--woly-shape-hover);
  }

  &[role='button']:active {
    --local-text-color: var(--woly-shape-text-active);
    --local-shape-color: var(--woly-shape-active);
  }

  &[data-disabled='true'] {
    --local-shape-color: var(--woly-shape-disabled);
    --local-text-color: var(--woly-shape-text-default);

    pointer-events: none;
  }
`;
