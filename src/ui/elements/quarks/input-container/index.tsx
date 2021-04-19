import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyboardEventHandle } from 'lib';
interface InputContainerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  left?: React.ReactNode;
  onChange: React.EventHandler<React.SyntheticEvent>;
  right?: React.ReactNode;
}

const InputContainerBase: React.FC<InputContainerProps & Variant> = ({
  children,
  className,
  disabled,
  left,
  onChange,
  right,
  variant = 'default',
}) => {

  const tabIndex = disabled ? -1 : 0;

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      console.log(1);

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
    <div
      className={className}
      data-disabled={disabled}
      data-variant={variant}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}>
      {left && <span data-icon="left">{left}</span>}
      <div data-input="input">{children}</div>
      {right && <span data-icon="right">{right}</span>}
    </div>
  );
}


export const InputContainer = styled(InputContainerBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-gap: var(--local-vertical);
  --local-compensate: var(--woly-const-m);

  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-neutral);
  --local-icon-fill: var(--woly-canvas-text-active);
  --local-value-color: var(--woly-canvas-text-default);

  width: 100%;
  outline: none;

  padding: var(--local-vertical) 0;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  background: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);

  [data-input="input"] {
    flex: 1;
    color: var(--local-value-color);
    
    padding: 0 var(--local-horizontal);
  }

  [data-icon] {
    --local-icon-size: var(--woly-line-height);
    
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--local-icon-size);
    height: var(--local-icon-size);

    padding: 0 calc(var(--local-horizontal) - var(--local-compensate));

      svg > path {
        fill: var(--local-icon-fill);
      }
  }

  [data-icon='left'] ~ [data-input="input"],
  [data-input="input"] ~ [data-icon='right'] {
    padding-left: var(--local-gap);
  }

  &:focus {
    --local-border-color: var(--woly-focus);
    box-shadow: 0 0 0 2px var(--woly-focus);
    outline: none;

    [data-icon] {
      svg > path {
        --local-icon-fill: var(--woly-canvas-text-default);
      }
    }
  }

  &:hover {
    --local-border-color: var(--woly-shape-hover);
  }

  &:active {
    --local-border-color: var(--woly-focus);
    
    [data-icon] {
      svg > path {
        --local-icon-fill: var(--woly-canvas-text-default);
      }
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;

    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-shape-disabled);
    --local-value-color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<
  'div',
  Record<string, unknown>,
  InputContainerProps & Variant
>;
