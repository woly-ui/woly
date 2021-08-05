import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { keyboardEventHandle } from 'lib/keyboard';

interface RadioButtonProps {
  className?: string;
  disabled?: boolean;
  id: string;
  checked: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  text?: string;
  name: string;
}

const RadioButtonBase: React.FC<RadioButtonProps & Priority> = ({
  checked,
  className,
  disabled = false,
  id,
  name,
  onChange,
  priority = 'primary',
  text,
  ...p
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
    <div
      className={className}
      data-disabled={disabled}
      data-priority={priority}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
    >
      <label htmlFor={id}>
        <input checked={checked} id={id} name={name} onChange={onChange} type="radio" {...p} />
        <span data-element="checkbox" />
        <span data-element="text">{text}</span>
      </label>
    </div>
  );
};

export const RadioButton = styled(RadioButtonBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: var(--woly-const-m);

  --local-radio-size: 18px;
  --local-ellipse-size: 10px;

  --local-color-text: var(--woly-canvas-text-default);
  --local-background: var(--woly-shape-text-default);

  --local-icon-fill: var(--woly-shape-default);

  --local-border-color: var(--woly-canvas-hover);
  --local-border-rounding: 50%;

  display: flex;
  align-items: center;

  margin-right: var(--local-vertical);

  border-radius: var(--local-border-rounding);
  outline: none;

  label {
    display: flex;
    align-items: center;

    cursor: pointer;

    input {
      display: none;

      outline: none;
    }
  }

  [data-element='checkbox'] {
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--local-radio-size);
    height: var(--local-radio-size);

    margin-right: var(--local-gap);

    background: var(--local-background);
    border: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--local-border-rounding);
  }

  input:checked + [data-element='checkbox'] {
    --local-border-color: var(--woly-shape-default);

    &:before {
      width: var(--local-ellipse-size);
      height: var(--local-ellipse-size);

      background-color: var(--local-icon-fill);
      border-radius: var(--local-border-rounding);

      content: '';
    }

    &:hover {
      --local-border-color: var(--woly-shape-hover);
      --local-icon-fill: var(--woly-shape-hover);
    }

    &:active {
      --local-border-color: var(--woly-shape-active);
      --local-icon-fill: var(--woly-shape-active);
    }
  }

  &:focus > label > [data-element='checkbox'] {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &:active > label > [data-element='checkbox'] {
    --local-border-color: var(--woly-shape-active);
  }

  &:hover {
    --local-border-color: var(--woly-shape-hover);
  }

  [data-element='text'] {
    color: var(--local-color-text);
    font-size: var(--woly-font-size);
    line-height: var(--woly-line-height);
  }

  &[data-disabled='true'] {
    pointer-events: none;

    [data-element='checkbox'] {
      --local-border-color: var(--woly-shape-disabled);
    }

    input:checked + [data-element='checkbox'] {
      --local-border-color: var(--woly-shape-disabled);
      --local-icon-fill: var(--woly-shape-disabled);
    }

    [data-element='text'] {
      --local-color-text: var(--woly-canvas-text-disabled);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, RadioButtonProps & Priority>;
