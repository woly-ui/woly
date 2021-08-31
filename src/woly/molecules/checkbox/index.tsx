import * as React from 'react';
import styled from 'styled-components';
import { IconCheckFilled, IconFilledUnchecked } from 'static/icons';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';
import { keyboardEventHandle } from 'lib/keyboard';
import { lineBox, visuallyHidden } from 'ui/elements';

type BaseCheckboxProps = React.LabelHTMLAttributes<HTMLLabelElement> & Priority;

export type CheckboxProps = BaseCheckboxProps & {
  disabled?: boolean;
  id: string;
  checked: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  text?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const CheckboxBase = forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    { checked, disabled, id, onChange, priority = 'secondary', text, inputRef, ...rest },
    labelRef,
  ) => {
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
      <label
        ref={labelRef}
        htmlFor={id}
        data-priority={priority}
        data-disabled={disabled}
        tabIndex={-1}
        {...rest}
      >
        <span data-element="checkbox">
          <input
            ref={inputRef}
            type="checkbox"
            id={id}
            tabIndex={tabIndex}
            checked={checked}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
          />
          <span data-element="checkbox-unchecked">
            <IconFilledUnchecked />
          </span>
          <span data-element="checkbox-checked">
            <IconCheckFilled />
          </span>
        </span>
        {text && <span data-element="text">{text}</span>}
      </label>
    );
  },
);

export const Checkbox = styled(CheckboxBase)<CheckboxProps>`
  ${lineBox};

  --local-icon-size: var(--woly-line-height);
  --local-icon-fill: var(--local-background-color);
  --local-icon-stroke: var(--woly-shape-default);
  --local-text-color: var(--woly-canvas-text-default);
  --local-background-color: var(--woly-shape-default);

  outline: none;

  user-select: none;

  input {
    ${visuallyHidden}
  }

  input:focus ~ [data-element^='checkbox'] > svg {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }

  [data-element='text'] {
    color: var(--local-text-color);
    font-size: var(--woly-font-size);
    line-height: var(--woly-line-height);
  }

  [data-element='checkbox-unchecked'],
  input:checked ~ [data-element='checkbox-checked'] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg {
      border-radius: var(--woly-rounding);
    }
  }

  input:checked ~ [data-element='checkbox-checked'] {
    svg > rect {
      fill: var(--local-icon-fill);
    }

    svg > path {
      stroke: var(--woly-shape-text-default);
    }

    &:hover {
      --local-icon-fill: var(--woly-shape-hover);
    }

    &:focus,
    &:active {
      --local-icon-fill: var(--woly-focus-color);
    }
  }

  [data-element='checkbox-checked'],
  input:checked ~ [data-element='checkbox-unchecked'] {
    display: none;
  }

  [data-element='checkbox-unchecked'] {
    &:hover svg > rect {
      stroke: var(--local-icon-stroke);
    }

    &:focus,
    &:active {
      svg > rect {
        --local-icon-stroke: var(--woly-focus-color);
      }
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;

    [data-element^='checkbox'] > svg {
      box-shadow: none;
    }

    [data-element='checkbox-unchecked'],
    input:checked ~ [data-element='checkbox-checked'] {
      display: flex;
      align-items: center;
      justify-content: center;

      svg > rect {
        fill: var(--woly-shape-disabled);
      }
    }

    [data-element='checkbox-checked'],
    input:checked ~ [data-element='checkbox-unchecked'] {
      display: none;
    }
  }
`;
