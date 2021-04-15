import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
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
    {list.map(({ left, right, text, id, disabled = 'false', onClick }) => (
      <li key={id} data-type="list-item" data-disabled={disabled} onClick={onClick}>
        {left && <span data-icon="left">{left}</span>}
        <span data-block="content">{text}</span>
        {right && <span data-icon="right">{right}</span>}
      </li>
    ))}
  </ul>
);

export const List = styled(ListBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-gap: var(--local-vertical);
  --local-compensate: var(--woly-const-m);

  --local-color: var(--woly-canvas-text-default);
  --local-background: var(--woly-shape-text-default);
  --local-item-background: var(--woly-canvas-default);

  box-sizing: border-box;
  width: 100%;

  padding: 0;

  list-style-type: none;

  [data-icon] {
    --local-icon-size: var(--woly-line-height);
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: var(--local-icon-size);
    height: var(--local-icon-size);
    padding-right: 6px;

    svg > path {
      fill: var(--local-color);
    }
  }

  li[data-type='list-item'] {
    display: flex;
    flex: 1;
    align-items: center;

    padding: var(--local-vertical) var(--local-horizontal);

    background: var(--local-item-background);

    font-size: var(--woly-font-size, 15px);
    line-height: var(--woly-line-height, 24px);

    color: var(--local-color);

    cursor: pointer;

    outline: none;
    border-radius: var(--woly-rounding);

    [data-block='content'] {
      flex: 1;
    }

    &:hover {
      --local-item-background: var(--woly-canvas-disabled);
    }
    &:focus{
      box-shadow: 0 0 0 1.5px var(--woly-focus);
    }
    &:active {
     --local-item-background: var(--woly-focus);
     --local-color: var( --woly-shape-text-active);
    }

    &[data-disabled='true'] {
      --local-color: var(--woly-canvas-text-disabled);
      
      pointer-events: none;

      [data-icon] {
        svg > path {
          --local-color: var(--woly-canvas-text-disabled);
        }
      }
    }
  }
` as StyledComponent<'ul', Record<string, unknown>, List & Variant>;
