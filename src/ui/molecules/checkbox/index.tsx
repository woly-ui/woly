import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { CheckIcon } from 'icons';
import { Variant } from 'lib/types';

interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  id: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  text?: string;
}

const CheckboxBase: React.FC<CheckboxProps & Variant> = ({
  className,
  disabled,
  id,
  isChecked,
  onChange,
  text,
  variant = 'default',
}) => (
  <label htmlFor={id} className={className} data-variant={variant}>
    <div data-block="container" data-disabled={disabled}>
      <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
      <span data-block="checkmark">{<CheckIcon />}</span>
      {text && <span data-block="text">{text}</span>}
    </div>
  </label>
);

export const Checkbox = styled(CheckboxBase)`
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

  --woly-checkbox-width: 18px;
  --woly-checkbox-height: 18px;

  padding: var(--woly-vertical, 6.4px) var(--woly-horizontal, 6.4px);

  display: flex;
  align-items: center;
  flex-direction: row;
  user-select: none;

  [data-block='container'] {
    position: relative;
    display: flex;
    align-items: flex-start;

    &:hover {
      [data-block='checkmark'] {
        background: transparent;
        border-color: var(--woly-canvas, #000000);
      }
      input:checked ~ [data-block='checkmark'] {
        background: var(--woly-canvas, #683aef);
        border-color: var(--woly-border, #683aef);
      }
    }

    input:checked ~ [data-block='checkmark'] {
      background: var(--woly-canvas, #b0a3f4);
      border-color: var(--woly-border, #c4c4c4);
    }
  }

  [data-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;

    input:checked ~ [data-block='checkmark'] {
      background: var(--woly-background-disabled, #e4e4e4);
    }
  }

  [data-block='text'] {
    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 24px);
    color: var(--woly-color, #000000);
  }

  [data-block='checkmark'] {
    height: var(--woly-checkbox-height);
    width: var(--woly-checkbox-width);

    border: solid 1px;
    border-color: var(--woly-border, #c4c4c4);
    border-radius: 3px;

    transition: all 150ms;
    margin-right: var(--woly-gap, 12px);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    &:checked + [data-block='checkmark'] svg {
      display: block;
    }
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
