import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyboardEventHandle } from 'lib';
interface List {
  className?: string;
  list: Array<{
    left?: React.ReactNode;
    right?: React.ReactNode;
    text: React.ReactNode;
    id: string;
    disabled?: boolean;
    onClick: React.EventHandler<React.SyntheticEvent>;
  }>;
}

const ListBase: React.FC<List & Variant> = ({ className, list, variant = 'default', ...p }) => (
  <ul className={className} data-variant={variant}>
    {list.map(({ left, right, text, id, disabled = 'false', onClick }) => {
      const tabIndex = disabled ? -1 : 0;

      const onKeyDown = React.useCallback(
        (event: React.KeyboardEvent) => {
          console.log(1);

          if (event.key === 'Enter') {
            event.preventDefault();
          }
          const keyHandler = {
            enter: (event: React.SyntheticEvent<Element, Event>) => {
              onClick(event);
            },
          };

          keyboardEventHandle({
            event,
            keyHandler,
          });
        },
        [onClick],
      );

      return (
        <li
          data-disabled={disabled}
          data-type="list-item"
          key={id}
          onClick={onClick}
          onKeyDown={onKeyDown}
          tabIndex={tabIndex}
        >
          {left && <span data-icon="left">{left}</span>}
          <span data-text="text">{text}</span>
          {right && <span data-icon="right">{right}</span>}
        </li>
      );
    })}
  </ul>
);

export const List = styled(ListBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-gap: var(--local-vertical);
  --local-compensate: var(--woly-const-m);
  --local-margin: var(--woly-border-width);

  --local-color: var(--woly-canvas-text-default);
  --local-background: var(--woly-shape-text-default);
  --local-item-background: var(--woly-canvas-default);
  --local-border: var(--woly-canvas-default);

  box-sizing: border-box;

  width: 100%;

  padding: 0;
  margin: 0;

  border: var(--woly-border-width) solid var(--local-border);

  list-style-type: none;

  li[data-type='list-item'] {
    display: flex;
    align-items: center;

    padding: var(--local-vertical) 0;
    margin-bottom: var(--local-margin);

    font-size: var(--woly-font-size, 15px);
    line-height: var(--woly-line-height, 24px);

    color: var(--local-color);
    background: var(--local-item-background);

    cursor: pointer;
    outline: none;

    [data-text] {
      display: flex;
      flex: 1;
      padding: 0 var(--local-horizontal);
    }

    [data-icon] {
      --local-icon-size: var(--woly-line-height);
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      padding: 0 calc(var(--local-horizontal) - var(--local-compensate));

      width: var(--local-icon-size);
      height: var(--local-icon-size);

      svg > path {
        fill: var(--local-color);
      }
    }

    [data-icon='left'] ~ [data-text],
    [data-text] ~ [data-icon='right'] {
      padding-left: var(--local-gap);
    }

    &:hover {
      --local-item-background: var(--woly-canvas-disabled);
    }
    &:focus {
      box-shadow: 0 0 0 1.5px var(--woly-focus);
    }
    &:active {
      --local-item-background: var(--woly-focus);
      --local-color: var(--woly-shape-text-active);
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
