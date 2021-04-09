import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyboardEventHandle, selectHandlersGet } from 'lib';

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
  children: React.ReactNode;
  value: string;
}

interface SelectProps {
  className?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  options: SelectOptionProps[];
  placeholder?: string;
  selected: string | null;
}

export const SelectBase: React.FC<SelectProps & Variant> = ({
  className,
  icon,
  isDisabled,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder = '',
  selected,
  variant = 'default',
}) => {
  const [isOpen, setIsOpen] = React.useReducer((is) => !is, false);
  const selectRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const tabIndex = isDisabled ? -1 : 0;
  const select = selected ?? placeholder;

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const selectNode = selectRef.current;
      const dropdownNode = dropdownRef.current;

      if (!document || !selectNode || !dropdownNode || event.key === 'Tab') {
        return;
      }

      event.preventDefault();

      const eventHandlers = selectHandlersGet({
        dropdownNode,
        event,
        isOpen,
        onChange,
        selectNode,
        setIsOpen,
      });

      keyboardEventHandle({
        event,
        eventHandlers,
      });
    },
    [selectRef, dropdownRef, isOpen, onChange],
  );
  return (
    <div
      className={className}
      data-disabled={isDisabled}
      data-open={isOpen}
      data-select
      data-variant={variant}
      onBlur={onBlur}
      onClick={setIsOpen}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      ref={selectRef}
      tabIndex={tabIndex}
    >
      <div data-selected>
        <div>{select}</div>
        <span data-icon={isOpen}>{icon}</span>
      </div>
      {/* В дальнейшем использовать Popover и List для создания выпадающего списка элементов */}
      <ul
        aria-activedescendant={select}
        data-visible={isOpen}
        ref={dropdownRef}
        role="listbox"
        tabIndex={-1}
      >
        {options.map(({ children, value }) => (
          <li
            data-value={value}
            key={value}
            onClick={onChange}
            role="option"
            tabIndex={-1}
          >
            {children}
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
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  position: relative;
  align-items: center;
  outline: none;
  cursor: pointer;

  &:focus > div[data-selected],
  &:active > div[data-selected] {
    border-color: var(--woly-background-focus, #1f68f5);
    color: var(--woly-color-focus, #000000);
    svg > path {
      fill: var(--woly-color-focus, #c4c4c4);
    }
  }

  &[data-open='true'] > div[data-selected] {
    border-color: var(--woly-border-focus, #b0a3f4);
  }

  svg > path {
    fill: var(--woly-color, #000000);
  }

  &[data-disabled='true'] {
    pointer-events: none;

    svg > path {
      fill: var(--woly-color-disabled, #c4c4c4);
    }

    div[data-selected] {
      background: var(--woly-background-disabled, #ffffff);
      border-color: var(
        --woly-border-disabled,
        var(--woly-background-disabled, #c4c4c4)
      );
      color: var(--woly-color-disabled, #c4c4c4);
    }
  }

  div[data-selected] {
    display: flex;
    align-items: center;
    padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);
    background: var(--woly-canvas, #ffffff);

    border-color: var(--woly-border, var(--woly-background, #f8f7f7));
    border-style: solid;
    border-width: var(--woly-border-width, 1.5px);
    border-radius: var(--woly-rounding, 3px);
    box-sizing: border-box;

    color: var(--woly-color, #000000);

    div {
      width: 225px;
    }
  }

  span[data-icon='true'] {
    transform: rotate(180deg);
  }

  span[data-icon='false'] {
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
    border-color: var(--woly-border, var(--woly-background, #f8f7f7));
    border-style: solid;
    border-width: var(--woly-border-width, 1px);
    border-radius: var(--woly-rounding, 3px);
    padding: 0;
    z-index: 1;
    margin-top: 6px;
    box-shadow: 3px 3px 9px rgba(57, 57, 57, 0.12);
  }

  ul[data-visible='true'] {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  li {
    padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);
    line-height: var(--woly-line-height, 24px);
    color: var(--woly-color, #000000);
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      color: var(--woly-color-hover, #1a1a23);
      background-color: var(--woly-background-hover, #f8f8fa);
    }
  }

  div:not(:first-child) {
    margin-top: var(--woly-gap);
  }
` as StyledComponent<'div', Record<string, unknown>, SelectProps & Variant>;
