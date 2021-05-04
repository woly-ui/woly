import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyboardEventHandle } from 'lib';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
}

const SwitchBase: React.FC<SwitchProps & Variant> = ({
  className,
  id,
  checked,
  disabled = false,
  onChange,
  variant = 'secondary',
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
      data-variant={variant}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
    >
      <label htmlFor={id}>
        <input checked={checked} id={id} onChange={onChange} type="checkbox" {...p} />
        <span data-checkbox />
      </label>
    </div>
  );
};

export const Switch = styled(SwitchBase)`
  --local-shape: var(--woly-canvas-hover);
  --local-border: var(--woly-focus);
  --local-tumbler-background: var(--woly-shape-text-default);

  --local-switch-width: 57px;
  --local-switch-height: 30px;
  --local-switch-border-radius: 18px;

  --local-tumbler-width: 24px;
  --local-tumbler-height: 24px;
  --local-tumbler-width-active: 30px;
  --local-tumbler-border-radius: 22px;

  --local-switch-margin: 3px;

  position: relative;
  display: flex;
  align-items: center;
  outline: none;

  label {
    width: var(--local-switch-width);
    height: var(--local-switch-height);
    cursor: pointer;

    input {
      display: none;
      outline: none;
    }
  }

  [data-checkbox] {
    position: absolute;
    width: var(--local-switch-width);
    height: var(--local-switch-height);
    background-color: var(--local-shape);
    border-radius: var(--local-switch-border-radius);

    &:before {
      position: absolute;
      width: var(--local-tumbler-width);
      height: var(--local-tumbler-height);
      margin: var(--local-switch-margin);
      background-color: var(--local-tumbler-background);
      border-radius: var(--local-tumbler-border-radius);
      content: '';
    }
  }

  input:checked + [data-checkbox] {
    --local-shape: var(--woly-shape-default);

    &:before {
      right: 0;
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
  }

  &[data-disabled='true'] > label > [data-checkbox] {
    --local-shape: var(--woly-shape-disabled);
  }

  &:focus > label > [data-checkbox] {
    box-shadow: 0 0 0 var(--woly-border-width) var(--local-border);

    &:before {
      box-shadow: 0 0 0 var(--woly-border-width) var(--local-border);
    }
  }

  &:hover > label > [data-checkbox] {
    --local-shape: var(--woly-shape-hover);
  }

  &:active > label > [data-checkbox] {
    box-shadow: none;
    &:before {
      width: var(--local-tumbler-width-active);
      box-shadow: none;
    }
  }
` as StyledComponent<'div', Record<string, unknown>, SwitchProps & Variant>;
