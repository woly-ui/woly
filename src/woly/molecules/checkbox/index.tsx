import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { IconCheckFilled, IconFilledUnchecked } from 'static/icons';
import { Priority, keyboardEventHandle } from 'lib';
import { box } from 'ui/elements/box';

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
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
    >
      <span data-container data-disabled={disabled} tabIndex={-1}>
        <span data-icon="checkbox">
          <input type="checkbox" id={id} checked={checked} onChange={onChange} />
          <span data-unchecked>
            <IconFilledUnchecked />
          </span>
          <span data-checked>
            <IconCheckFilled />
          </span>
        </span>
        {text && <span data-text>{text}</span>}
      </span>
    </label>
  );
};

export const Checkbox = styled(CheckboxBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  --local-icon-size: 24px;
  --local-icon-fill: var(--local-background-color);
  --local-icon-stroke: var(--woly-shape-default);
  --local-text-color: var(--woly-canvas-text-default);
  --local-background-color: var(--woly-shape-default);

  outline: none;

  user-select: none;

  &:focus [data-checkmark] > svg,
  &:active [data-checkmark] > svg {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  [data-container] {
    ${box}

    display: flex;
    align-items: center;

    outline: none;

    [data-text] {
      color: var(--local-text-color);
      font-size: var(--woly-font-size, 12px);
      line-height: var(--woly-line-height, 24px);
    }

    input {
      display: none;
    }

    [data-checkmark] {
      width: var(--local-icon-size);
      height: var(--local-icon-size);

      margin-right: var(--local-gap);

      svg {
        border-radius: var(--woly-rounding);
      }
    }

    [data-unchecked],
    input:checked ~ [data-checked] {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input:checked ~ [data-checked] {
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

    [data-checked],
    input:checked ~ [data-unchecked] {
      display: none;
    }

    [data-unchecked] {
      &:hover {
        svg > rect {
          stroke: var(--local-icon-stroke);
        }
      }

      &:focus,
      &:active {
        svg > rect {
          --local-icon-stroke: var(--woly-focus);
        }
      }
    }
  }

  [data-disabled='true'] {
    pointer-events: none;

    [data-block='text'] {
      --local-text-color: var(--woly-shape-disabled);
    }

    [data-unchecked] > svg,
    [data-checked] > svg {
      box-shadow: none;
    }

    [data-unchecked],
    input:checked ~ [data-checked] {
      display: flex;
      align-items: center;
      justify-content: center;

      svg > rect {
        fill: var(--woly-shape-disabled);
      }
    }

    [data-checked],
    input:checked ~ [data-unchecked] {
      display: none;
    }
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Priority>;
