import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { IconCheckFilled, IconFilledUnchecked } from 'static/icons';
import { Priority } from 'lib/types';
import { keyboardEventHandle } from 'lib/keyboard';
import { lineBox, visuallyHidden } from 'ui/elements';

interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  id: string;
  checked: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  text?: string;
}

const CheckboxBase: React.FC<CheckboxProps & Priority> = ({
  checked,
  className,
  disabled,
  id,
  onChange,
  priority = 'secondary',
  text,
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
    <label
      htmlFor={id}
      className={className}
      data-priority={priority}
      data-disabled={disabled}
      tabIndex={-1}
    >
      <span data-element="checkbox">
        <input
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
};

export const Checkbox = styled(CheckboxBase)`
  ${lineBox}

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

    &:hover {
      --local-icon-fill: var(--woly-shape-hover);
    }

    &:focus,
    &:active {
      --local-icon-fill: var(--woly-focus);
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

    [data-element='text'] {
      --local-text-color: var(--woly-shape-disabled);
    }

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
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Priority>;
