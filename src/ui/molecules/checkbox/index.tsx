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
  variant = 'secondary',
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

  --local-icon-size: 24px;
  --local-icon-fill: var(--local-background-color);
  --local-icon-stroke: var(--woly-shape-default);
  --local-text-color: var(--woly-canvas-text-default);
  --local-background-color: var(--woly-shape-default);

  padding: var(--local-vertical) var(--local-horizontal);

  user-select: none;
  outline: none;

  &:focus [data-checkmark] > svg,
  &:active [data-checkmark] > svg {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    border-radius: var(--woly-rounding);
  }

  [data-block='container'] {
    display: flex;
    align-items: center;

    outline: none;

    [data-block='text'] {
      color: var(--local-text-color);
      font-size: var(--woly-font-size, 12px);
      line-height: var(--woly-line-height, 24px);
    }

    input {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }

    [data-checkmark] {
      width: var(--local-icon-size);
      height: var(--local-icon-size);

      margin-right: var(--local-gap);
    }

    [data-checkmark='unchecked'],
    input:checked ~ [data-checkmark='checked'] {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input:checked ~ [data-checkmark='checked'] {
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

    [data-checkmark='checked'],
    input:checked ~ [data-checkmark='unchecked'] {
      display: none;
    }

    [data-checkmark='unchecked'] {
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

    [data-checkmark='unchecked'],
    input:checked ~ [data-checkmark='checked'] {
      display: flex;
      align-items: center;
      justify-content: center;

      svg > rect {
       fill: var(--woly-shape-disabled);
      }
    }

    [data-checkmark='checked'],
    input:checked ~ [data-checkmark='unchecked'] {
      display: none;
    }
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
