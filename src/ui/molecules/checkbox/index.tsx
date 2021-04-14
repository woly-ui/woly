import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { CheckIcon, UnCheckIcon } from 'icons';
import { Variant, keyboardEventHandle } from 'lib';

interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  id: string;
  checked: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  text?: string;
}

const CheckboxBase: React.FC<CheckboxProps & Variant> = ({
  className,
  disabled,
  id,
  checked,
  onChange,
  text,
  variant = 'default',
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
      data-variant={variant}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
    >
      <span data-block="container" data-disabled={disabled} tabIndex={-1}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <span data-checkmark="unchecked">
          <UnCheckIcon />
        </span>
        <span data-checkmark="checked">
          <CheckIcon />
        </span>
        {text && <span data-block="text">{text}</span>}
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

  --local-width: 24px;
  --local-height: 24px;

  padding: var(--local-vertical, 6.4px) var(--local-horizontal, 6.4px);

  user-select: none;
  outline: none;

  &:focus [data-checkmark] > svg,
  &:active [data-checkmark] > svg {
    box-shadow: 0 0 0 1.5px var(--woly-border, #9381f1);
    border-radius: var(--woly-rounding, 3px);
  }

  [data-block='container'] {
    display: flex;
    align-items: center;

    [data-checkmark] {
      width: var(--local-width);
      height: var(--local-height);

      margin-right: var(--local-gap, 15px);
    }

    [data-checkmark='unchecked'],
    input:checked ~ [data-checkmark='checked'] {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    [data-checkmark='checked'],
    input:checked ~ [data-checkmark='unchecked'] {
      display: none;
    }

    [data-checkmark='unchecked'] {
      &:hover {
        svg > rect {
          stroke: var(--woly-color, #b0a3f4);
        }
      }

      &:focus,
      &:active {
        svg > rect {
          stroke: var(--woly-color, #9381f1);
        }
      }
    }

    [data-checkmark='checked'] {
      &:hover {
        svg > rect {
          fill: var(--woly-color, #c9c0f8);
        }
      }

      &:focus,
      &:active {
        svg > rect {
          fill: var(--woly-color, #9381f1);
        }
      }
    }
  }

  [data-disabled='true'] {
    pointer-events: none;

    [data-block='text'] {
      color: var(--woly-color, #e4e4e4);
    }

    [data-checkmark='unchecked'],
    input:checked ~ [data-checkmark='checked'] {
      display: flex;
      align-items: center;
      justify-content: center;

      svg > rect {
        fill: var(--woly-canvas-color, #e4e4e4);
      }
    }

    [data-checkmark='checked'],
    input:checked ~ [data-checkmark='unchecked'] {
      display: none;
    }
  }

  [data-block='text'] {
    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 24px);
    color: var(--woly-color, #000000);
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
