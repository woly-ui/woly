import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { lineBox, visuallyHidden } from 'ui/elements';

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
  priority = 'secondary',
  text,
  ...p
}) => {
  const tabIndex = disabled ? -1 : 0;

  return (
    <label
      htmlFor={id}
      className={className}
      data-disabled={disabled}
      data-priority={priority}
      tabIndex={-1}
    >
      <input
        type="radio"
        id={id}
        name={name}
        tabIndex={tabIndex}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...p}
      />
      <span data-element="checkbox" />
      {text && <span data-element="text">{text}</span>}
    </label>
  );
};

export const RadioButton = styled(RadioButtonBase)`
  ${lineBox}

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
` as StyledComponent<'div', Record<string, unknown>, RadioButtonProps & Priority>;
