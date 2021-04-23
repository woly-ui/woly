import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { CheckIcon, UnCheckIcon } from 'icons';
import { Variant } from 'lib/types';

interface RadioButtonProps {
    className?: string;
    disabled?: boolean;
    id: string;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    text?: string;
}

const RadioButtonBase: React.FC<RadioButtonProps & Variant> = ({
    className,
    disabled,
    id,
    checked,
    onChange,
    text,
    variant = 'default',
    ...p
}) => (
    <label htmlFor={id} className={className} data-variant={variant}>
        <span data-container="container" data-disabled={disabled}>
            <span data-input="radio-input">
                <input type="radio" id={id} checked={checked} onChange={onChange} {...p} />
                <span data-radio="radio-control">
                    <span data-icon></span>
                </span>
            </span>
            {text && <span data-text="text">{text}</span>}
        </span>
    </label>
);

export const RadioButton = styled(RadioButtonBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: var(--woly-const-m);

  --local-size: 18px;

  --local-color-text: var(--woly-canvas-text-default);
  --local-background: var(--woly-canvas-default);

  --local-icon-fill: var(--woly-shape-default);

  --local-border-color: var(--woly-canvas-hover);
  --local-border-rounding: 50%;

  width: 100%;
  user-select: none;
  outline: none;

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  [data-container='container'] {
    display: flex;
    align-items: center;

    [data-input='radio-input'] {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: var(--local-vertical);

      [data-radio='radio-control'] {
        display: flex;
        align-items: center;
        justify-content: center;

        width: var(--local-size);
        height: var(--local-size);

        padding: var(--local-gap);

        border: var(--woly-border-width) solid var(--local-border-color);
        border-radius: var(--local-border-rounding);

        background: var(--local-background);

        &:hover {
          --local-border-color: var(--woly-shape-hover);
        }

        &:active {
          --local-border-color: var(--woly-focus);
        }
      }
    }
  }
  [data-icon] {
    align-items: center;
    justify-content: center;

    width: 10px;
    height: 10px;

    border-radius: var(--local-border-rounding);
    background: var(--local-icon-fill);
    padding: calc(var(--local-gap) - var(--woly-border-width));
  }

  input:not(:checked) ~ [data-radio='radio-control'] > [data-icon] {
    display: none;
  }

  input:checked ~ [data-radio='radio-control'] {
    --local-border-color: var(--woly-shape-default);

    [data-icon] {
      display: flex;

      &:hover {
        --local-icon-fill: var(--woly-shape-hover);
      }

      &:active {
        --local-icon-fill: var(--woly-focus);
      }
    }
  }

  [data-block='text'] {
    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 24px);

    color: var(--local-color-text);
  }
` as StyledComponent<'div', Record<string, unknown>, RadioButtonProps & Variant>;
