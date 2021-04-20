import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyboardEventHandle } from 'lib';
interface List {
  className?: string;
  disabled?: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  list: Array<{
    left?: React.ReactNode;
    right?: React.ReactNode;
    text: React.ReactNode;
    id: string;
    disabled?: boolean;
    onChange: React.EventHandler<React.SyntheticEvent>;
  }>;
}

const ListBase: React.FC<List & Variant> = ({
  className,
  list,
  variant = 'default',
  disabled = 'false',
  onChange
}) => {
  const tabIndex = disabled ? -1 : 0;

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {

      if (event.key === 'Enter') {
        event.preventDefault();
      }
      const keyHandler = {
        enter: (event: React.SyntheticEvent<Element, Event>) => {
          onChange(event);
        },
      };

      keyboardEventHandle({
        event,
        keyHandler,
      });
    },
    [onChange],
  );
  return (
    <ul
      className={className}
      data-variant={variant}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      onChange={onChange}
      role="listbox"
    >
      {list.map(({ left, right, text, id, onChange }) => (
        <li
          data-disabled={disabled}
          data-type="list-item"
          key={id}
        >
          {left && <span data-icon="left">{left}</span>}
          <span data-text="text">{text}</span>
          {right && <span data-icon="right">{right}</span>}
        </li>
      ))}
    </ul>
  );
}


export const List = styled(ListBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-gap: var(--woly-const-m);
  --local-compensate: calc(var(--woly-const-m)/2);
  --local-margin: var(--woly-border-width);

  --local-color: var(--woly-canvas-text-default);
  --local-background: var(--woly-shape-text-default);
  --local-item-background: var(--woly-canvas-default);
  --local-border: var(--woly-canvas-default);

  box-sizing: border-box;

  width: 100%;
  outline: none;

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

    & > [data-text]:not(:only-child, :last-child ){
      padding-right: 0;
    }

    [data-icon] {
      --local-icon-size: var(--woly-line-height);
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;

      width: var(--local-icon-size);
      height: var(--local-icon-size);

      svg > path {
        fill: var(--local-color);
      }
    }

    [data-icon='left'] {
      padding: 0 0 0 calc(var(--local-horizontal) - var(--local-compensate));
    }

    [data-icon='right'] {
      padding: 0 calc(var(--local-horizontal) - var(--local-compensate)) 0 0;
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
  &:focus {
      box-shadow: 0 0 0 1.5px var(--woly-focus);
  }
` as StyledComponent<'ul', Record<string, unknown>, List & Variant>;
