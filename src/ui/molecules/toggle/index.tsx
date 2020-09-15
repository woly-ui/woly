import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --toggle-width
 * --toggle-height
 * --toggle-rounding
 * --toggle-unactive-background-color
 * --toggle-active-background-color
 * --toggle-switcher-width
 * --toggle-switcher-height
 * --toggle-switcher-background-color
 */

interface ToggleProps {
  id: string;
  isChecked: boolean;
  label?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Toggle: React.FC<ToggleProps & { className: string }> = ({
  className,
  id,
  isChecked,
  label,
  onChange,
}) => (
  <div className={className}>
    {label && <div>{label}</div>}
    <label htmlFor={id}>
      <input type="checkbox" onChange={onChange} id={id} checked={isChecked} />
      <span />
    </label>
  </div>
);

export const Base = styled(Toggle)`
  position: relative;

  display: flex;
  align-items: center;

  & > div {
    padding-right: 15px;
  }

  label {
    position: relative;

    width: var(--toggle-width, 42px);
    height: var(--toggle-height, 24px);
  }

  label > input {
    width: 0;
    height: 0;

    opacity: 0;
  }

  label > span {
    position: absolute;

    width: var(--toggle-width, 42px);
    height: var(--toggle-height, 24px);

    background-color: var(--toggle-unactive-background-color, #d5d5dc);
    border-radius: var(--toggle-rounding, 12px);
    cursor: pointer;

    &:before {
      position: absolute;

      width: var(--toggle-switcher-width, 12px);
      height: var(--toggle-switcher-height, 12px);
      margin: calc(
        var(--toggle-height, 24px) / 2 - var(--toggle-switcher-height, 12px) / 2
      );

      background-color: var(--toggle-switcher-background-color, #ffffff);
      border-radius: var(--toggle-rounding, 12px);
      cursor: pointer;

      content: '';
    }
  }

  label > input:checked + span {
    background-color: var(--toggle-active-background-color, #d5d5dc);
  }

  label > input:checked + span:before {
    right: 0;
  }
` as StyledComponent<'div', Record<string, unknown>, ToggleProps>;
