import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-toggle-width
 * --woly-toggle-height
 * --woly-toggle-rounding
 * --woly-toggle-switcher-width
 * --woly-toggle-switcher-height
 * --woly-background
 * --woly-canvas
 * --woly-border
 * --woly-border-focus
 * --woly-border-width
 */

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  isChecked: boolean;
  label?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ToggleBase: React.FC<ToggleProps & Variant> = ({
  className,
  id,
  isChecked,
  label,
  onChange,
  variant = 'default',
  ...p
}) => (
  <div className={className} data-variant={variant}>
    {label && <div>{label}</div>}
    <label htmlFor={id}>
      <input
        checked={isChecked}
        id={id}
        onChange={onChange}
        type="checkbox"
        {...p}
      />
      <span />
    </label>
  </div>
);

export const Toggle = styled(ToggleBase)`
  position: relative;

  display: flex;
  align-items: center;

  & > div {
    padding-right: 15px;
  }

  label {
    position: relative;

    width: var(--woly-toggle-width, 42px);
    height: var(--woly-toggle-height, 24px);
  }

  label > input {
    display: none;
  }

  label > span {
    position: absolute;

    width: var(--woly-toggle-width, 42px);
    height: var(--woly-toggle-height, 24px);

    background-color: var(--woly-canvas, #d5d5dc);
    border-color: var(--woly-border, #000000);
    border-style: solid;
    border-width: var(--woly-border-width, 0);
    border-radius: var(--woly-rounding, 12px);
    cursor: pointer;

    &:before {
      position: absolute;

      width: var(--woly-toggle-switcher-width, 12px);
      height: var(--woly-toggle-switcher-height, 12px);
      margin: calc(
        var(--woly-toggle-height, 24px) / 2 -
          var(--woly-toggle-switcher-height, 12px) / 2
      );

      background-color: var(--woly-toggle-switcher-background-color, #ffffff);
      border-radius: var(--woly-rounding, 12px);
      cursor: pointer;

      content: '';
    }
  }

  label > input:checked + span {
    background-color: var(--woly-background, #d5d5dc);
    border-color: var(--woly-border-focus, var(--woly-background, #000000));
  }

  label > input:checked + span:before {
    right: 0;
  }
` as StyledComponent<'div', Record<string, unknown>, ToggleProps & Variant>;