import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { CheckIcon, UnCheckIcon } from 'icons';
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
    <span data-block="container" data-disabled={disabled}>
      <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
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

export const Checkbox = styled(CheckboxBase)`
  --woly-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  --woly-checkbox-width: 24px;
  --woly-checkbox-height: 24px;

  padding: var(--woly-vertical, 6.4px) var(--woly-horizontal, 6.4px);

  user-select: none;

  [data-block='container'] {
    display: flex;
    align-items: center;

    [data-checkmark] {
      width: var(--woly-checkbox-width);
      height: var(--woly-checkbox-height);

      align-items: center;
      justify-content: center;

      margin-right: var(--woly---woly-gap, 15px);
    }

    [data-checkmark='unchecked'] {
      display: block;
    }

    [data-checkmark='checked'] {
      display: none;
    }

    input:checked ~ [data-checkmark='checked'] {
      display: block;
    }

    input:checked ~ [data-checkmark='unchecked'] {
      display: none;
    }

    [data-checkmark='unchecked'] {
      &:hover,
      &:focus {
        svg > rect {
          stroke: var(--woly-color, #b0a3f4);
        }
      }
    }
  }

  [data-disabled='true'] {
    pointer-events: none;

    [data-block='text'] {
      color: var(--woly-color, #e4e4e4);
    }

    [data-checkmark='unchecked'] {
      display: block;

      svg > rect {
        stroke: var(--woly-canvas-color, #e4e4e4);
      }
    }

    [data-checkmark='checked'] {
      display: none;
    }

    input:checked ~ [data-checkmark='checked'] {
      display: block;

      svg > rect {
        fill: var(--woly-canvas-color, #e4e4e4);
      }
    }

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
