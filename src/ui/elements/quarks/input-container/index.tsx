import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-font-size
 * --woly-rounding
 * --woly-line-height
 * --woly-background
 * --woly-background-disabled
 * --woly-border
 * --woly-border-focus
 * --woly-border-disabled
 * --woly-color
 * --woly-color-disabled
 *
 */

interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  left?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  right?: React.ReactNode;
}

const InputContainerBase: React.FC<InputContainerProps & Variant> = ({
  left,
  className,
  children,
  disabled,
  right,
  variant = 'default',
}) => (
  <div className={className} data-variant={variant} data-disabled={disabled}>
    {left && <span data-icon="left">{left}</span>}
    <div data-block="content">{children}</div>
    {right && <span data-icon="right">{right}</span>}
  </div>
);

export const InputContainer = styled(InputContainerBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  --woly-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  --woly-line-height: 24px;

  --woly-width: 100%;

  width: var(--woly-width);

  padding: var(--woly-vertical, 12px) var(--woly-horizontal, 15px);

  box-sizing: border-box;

  display: flex;
  align-items: center;

  background-color: var(--woly-background, #ffffff);

  border-color: var(--woly-border, #c0c0c0);
  border-style: solid;
  border-width: var(--woly-border-width, 1.5px);
  border-radius: var(--woly-rounding, 3px);

  [data-block='content'] {
    flex: 1;

    color: var(--woly-color-disabled, #c0c0c0);
  }

  & [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);

    svg > path {
      fill: var(--woly-canvas, #c4c4c4);
    }
  }

  &:hover,
  &:focus {
    border-color: var(--woly-border-focus, #b0a3f4);
  }

  &:active {
    border-color: var(--woly-border-focus, #9381f1);
    color: var(--woly-color-disabled, #000000);

    svg > path {
      fill: var(--woly-canvas, #000000);
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;

    color: var(--woly-color-disabled, #c0c0c0);
    background: var(--woly-background-disabled, #f5f5f5);
    border-color: var(--woly-background-disabled, #f5f5f5);

    [data-icon] {
      svg > path {
        fill: var(--woly-canvas, #c0c0c0);
      }
    }
  }

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
` as StyledComponent<
  'div',
  Record<string, unknown>,
  InputContainerProps & Variant
>;
