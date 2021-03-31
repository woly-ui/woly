import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Input } from 'ui';
import { Variant } from 'lib/types';

/**
 * --woly-border
 * --woly-border-focus
 * --woly-border-disabled
 * --woly-border-width
 * --woly-canvas
 * --woly-color-hover
 * --woly-background-hover
 * --woly-line-height
 */

interface SelectOptionProps {
  value: string;
  name: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange: (event: React.SyntheticEvent<HTMLElement>) => void;
  options: SelectOptionProps[];
  selected: SelectOptionProps;
}

export const SelectBase: React.FC<SelectProps & Variant> = ({
  autoFocus,
  className,
  icon,
  isDisabled,
  isRequired,
  name = 'select',
  onChange,
  options,
  selected,
  variant = 'default',
}) => {
  const [isVisible, setVisibility] = React.useReducer((is) => !is, false);

  return (
    <div className={className} data-variant={variant} onClick={setVisibility}>
      <div>
        <Input
          autoFocus={autoFocus}
          disabled={isDisabled}
          name={name}
          onChange={() => {}}
          required={isRequired}
          type="text"
          value={selected.name}
        />
        <span data-icon={isVisible}>{icon}</span>
      </div>
      {/* заменить список на компонент Popover, когда его реализуем */}
      <ul data-visible={isVisible}>
        {options.map(({ name, value }) => (
          <li data-value={value} key={value} onClick={onChange}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Select = styled(SelectBase)`
  --woly-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );
  position: relative;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  input:hover {
    cursor: pointer;
  }

  input:focus,
  input:active {
    outline: none;
  }

  span[data-icon='false'] {
    transform: rotate(180deg);
  }

  span[data-icon] {
    position: absolute;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  ul {
    display: none;
    position: absolute;
    width: 100%;
    list-style-type: none;
    background-color: var(--woly-canvas, #ffffff);
    border-color: var(--woly-border, #000000);
    border-style: solid;
    border-width: var(--woly-border-width, 0);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 1;
  }

  ul[data-visible='true'] {
    display: flex;
    flex-direction: column;
  }

  li {
    padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);
    line-height: var(--woly-line-height, 24px);
    color: var(--woly-color, #000000);
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--woly-color-hover, #1a1a23);
      background-color: var(--woly-background-hover, #f8f8fa);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, SelectProps & Variant>;
