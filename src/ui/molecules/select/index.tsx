import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyHandlerGet, keyboardEventHandle } from 'lib';
interface SelectOptionProps {
  children: React.ReactNode;
  value: string;
}

interface SelectProps {
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
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
  disabled,
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
  const tabIndex = disabled ? -1 : 0;
  const select = selected ?? placeholder;

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const selectNode = selectRef.current;
      const dropdownNode = dropdownRef.current;

      if (!document || !selectNode || !dropdownNode || event.key === 'Tab') {
        return;
      }

      event.preventDefault();
      const kh = keyHandlerGet({
        dropdownNode,
        isOpen,
        onChange,
        selectNode,
        setIsOpen,
      });
      const shiftKeyHandler = { arrowDown: setIsOpen };

      keyboardEventHandle({
        event,
        keyHandler: kh,
        shiftKeyHandler,
      });
    },
    [selectRef, dropdownRef, isOpen, onChange],
  );
  return (
    <div
      className={className}
      data-disabled={disabled}
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
          <li data-value={value} key={value} onClick={onChange} role="option" tabIndex={-1}>
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Select = styled(SelectBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-neutral);
  --local-value-color: var(--woly-canvas-text-default);
  --local-icon-fill: var(--woly-canvas-text-active);

  --local-select-width: 225px;

  position: relative;
  align-items: center;
  outline: none;
  cursor: pointer;

  div[data-selected] {
    display: flex;
    align-items: center;

    padding: var(--local-vertical) var(--local-horizontal);
    background: var(--local-background-color);

    border: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--woly-rounding);
    box-sizing: border-box;

    color: var(--local-value-color);

    div {
      width: var(--local-select-width);
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

  &:focus > div[data-selected],
  &:active > div[data-selected] {
    
    --local-border-color: var(--woly-focus);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);

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
      border: var(--woly-border-width) solid var(--local-border-color);
      color: var(--woly-color-disabled, #c4c4c4);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, SelectProps & Variant>;
