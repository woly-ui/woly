import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-toggle-width
 * --woly-toggle-height
 * --woly-toggle-rounding
 * --woly-toggle-unactive-background-color
 * --woly-toggle-active-background-color
 * --woly-toggle-switcher-width
 * --woly-toggle-switcher-height
 * --woly-toggle-switcher-background-color
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
    width: 0;
    height: 0;

    opacity: 0;
  }

  label > span {
    position: absolute;

    width: var(--woly-toggle-width, 42px);
    height: var(--woly-toggle-height, 24px);

    background-color: var(--woly-toggle-unactive-background-color, #d5d5dc);
    border-radius: var(--woly-toggle-rounding, 12px);
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
      border-radius: var(--woly-toggle-rounding, 12px);
      cursor: pointer;

      content: '';
    }
  }

  label > input:checked + span {
    background-color: var(--woly-toggle-active-background-color, #d5d5dc);
  }

  label > input:checked + span:before {
    right: 0;
  }
` as StyledComponent<'div', Record<string, unknown>, ToggleProps & Variant>;
