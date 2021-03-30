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

  --woly-checkbox-width: 24px;
  --woly-checkbox-height: 24px;

  padding: var(--woly-vertical, 6.4px) var(--woly-horizontal, 6.4px);

  user-select: none;

  [data-block='container'] {
    display: flex;
    align-items: center;

    input:checked ~ [data-block='checkmark'] {
      svg > rect {
        fill: var(--woly-color, #b0a3f4);
      }
    }

    [data-block='checkmark'] {
      position: relative;

      width: var(--woly-checkbox-width);
      height: var(--woly-checkbox-height);

      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: var(--woly---woly-gap, 15px);

      svg > rect {
        stroke: var(--woly-color, #c4c4c4);
        stroke-width: 1.5px;
        fill: none;
      }

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

    [data-block='checkmark'] {
      svg > rect {
        stroke: var(--woly-color, #e4e4e4);
      }
    }

    input:checked ~ [data-block='checkmark'] {
      svg > rect {
        fill: var(--woly-color, #e4e4e4);
      }
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
