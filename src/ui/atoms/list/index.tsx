import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-list-padding
 * --woly-list-color
 * --woly-list-background
 * --woly-rounding
 * --woly-shadow
 * --woly-canvas
 * --woly-background-hover
 * --woly-color
 * --woly-color-hover
 * --woly-line-height
 */

interface List {
  className?: string;
  list: Array<{
    left?: React.ReactNode;
    right?: React.ReactNode;
    text: React.ReactNode;
    id: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
  }>;
}

const ListBase: React.FC<List & Variant> = ({ className, list, variant = 'default' }) => (
  <ul className={className} data-variant={variant}>
    {list.map(({ left, right, text, id, disabled, onClick }) => (
      <li
        key={id}
        data-type="list-item"
        data-disabled={disabled}
        onClick={onClick}
      >
        {left && <span data-icon="left">{left}</span>}
        <span data-block="content">{text}</span>
        {right && <span data-icon="right">{right}</span>}
      </li>
    ))}
  </ul>
);

export const List = styled(ListBase)`
  --woly-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  --woly-width: 100%;

  box-sizing: border-box;
  width: var(--woly-width);

  padding: 0;

  color: var(--woly-color, #000000);

  list-style-type: none;
  background-color: var(--woly-canvas, #ffffff);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-shadow, 3px 3px 8px rgba(11, 31, 53, 0.04));

  [data-icon] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: var(--woly-line-height, 24px);
    height: var(--woly-line-height, 24px);
    padding-right: 6px;

    svg > path {
      fill: var(--woly-color-disabled, #000000);
    }
  }

  li[data-type='list-item'] {
    display: flex;
    flex: 1;
    align-items: center;

    padding: var(--woly-vertical, 12px) var(--woly-horizontal, 18px 12px);

    font-size: var(--woly-font-size, 15px);
    line-height: var(--woly-line-height, 24px);

    cursor: pointer;

    [data-block='content'] {
      flex: 1;
    }

    &:hover {
      background-color: var(--woly-background-hover, #f5f5f5);
    }

    &:focus,
    &:active {
      border-color: var(--woly-border-focus, #1f68f5);
      border-style: solid;
      border-width: var(--woly-border-width, 1.5px);
    }

    &[data-disabled='true'] {
      color: var(--woly-color-disabled, #c4c4c4);

      pointer-events: none;

      [data-icon] {
        svg > path {
          fill: var(--woly-canvas, #c4c4c4);
        }
      }
    }
  }
` as StyledComponent<'ul', Record<string, unknown>, List & Variant>;
