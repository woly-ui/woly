import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';
import { lineBox, visuallyHidden } from 'ui/elements';

type BaseRadioButtonProps = React.LabelHTMLAttributes<HTMLLabelElement> & Priority;

export type RadioButtonProps = BaseRadioButtonProps & {
  disabled?: boolean;
  id: string;
  checked: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  text?: string;
  name: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const RadioButtonBase = forwardRef<HTMLLabelElement, RadioButtonProps>(
  (
    {
      checked,
      disabled = false,
      id,
      name,
      onChange,
      priority = 'secondary',
      text,
      inputRef,
      ...rest
    },
    labelRef,
  ) => {
    const tabIndex = disabled ? -1 : 0;

    return (
      <label
        ref={labelRef}
        htmlFor={id}
        data-disabled={disabled}
        data-priority={priority}
        tabIndex={-1}
        {...rest}
      >
        <input
          ref={inputRef}
          type="radio"
          id={id}
          name={name}
          tabIndex={tabIndex}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span data-element="checkbox" />
        {text && <span data-element="text">{text}</span>}
      </label>
    );
  },
);

export const RadioButton = styled(RadioButtonBase)<RadioButtonProps>`
  ${lineBox};

  --local-radio-size: 17px;
  --local-ellipse-size: 10px;

  --local-color-text: var(--woly-canvas-text-default);
  --local-background: var(--woly-shape-text-default);

  --local-icon-fill: var(--woly-shape-default);

  --local-border-color: var(--woly-canvas-hover);
  --local-border-rounding: 50%;

  align-items: center;

  outline: none;

  user-select: none;

  input {
    ${visuallyHidden}
  }

  input:focus ~ [data-element='checkbox'] {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }

  &:active [data-element='checkbox'] {
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

  [data-element='checkbox'] {
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--local-radio-size);
    height: var(--local-radio-size);

    background: var(--local-background);
    border: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--local-border-rounding);
  }

  input:checked ~ [data-element='checkbox'] {
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

  &[data-disabled='true'] {
    pointer-events: none;

    [data-element='checkbox'] {
      --local-border-color: var(--woly-shape-disabled);
    }

    input:checked ~ [data-element='checkbox'] {
      --local-border-color: var(--woly-shape-disabled);
      --local-icon-fill: var(--woly-shape-disabled);
    }

    [data-element='text'] {
      --local-color-text: var(--woly-canvas-text-disabled);
    }
  }
`;
