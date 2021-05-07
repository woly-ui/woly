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
  disabled?: boolean;
  icon?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  options: SelectOptionProps[];
  placeholder?: string;
  selected: string | null;
}

export const SelectBase: React.FC<SelectProps & Variant> = ({
  className,
  disabled = false,
  icon,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder = '',
  selected,
  variant = 'secondary',
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
        <div data-value>{select}</div>
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
  --local-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level) - var(--woly-border-width)
  );
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical) -
      var(--woly-border-width)
  );

  --local-gap: var(--woly-const-m);

  --local-background: var(--woly-canvas-default);
  --local-border-input-color: var(--woly-canvas-text-active);

  --local-shape-color: var(--woly-canvas-text-default);

  --local-list-background: var(--woly-shape-text-default);
  --local-border-list: var(--woly-canvas-default);

  --local-icon-size: var(--woly-line-height);

  position: relative;
  align-items: center;
  width: 100%;

  outline: none;
  cursor: pointer;

  [data-selected] {
    display: flex;
    align-items: center;

    padding: var(--local-vertical) var(--local-horizontal);
    background: var(--local-background);

    border: var(--woly-border-width) solid var(--local-border-input-color);
    border-radius: var(--woly-rounding);
    box-sizing: border-box;

    color: var(--local-shape-color);

    [data-value] {
      flex: 1;
    }
  }

  [data-icon='true'] {
    transform: rotate(180deg);
  }

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;

    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      height: 100%;
      width: 100%;

      fill: var(--local-shape-color);
    }
  }

  ul {
    display: none;
    list-style-type: none;

    position: absolute;
    z-index: 1;
    width: 100%;

    background: var(--local-list-background);

    border: var(--woly-border-width) solid var(--local-border-list);
    border-radius: var(--woly-rounding);

    padding: 0;
    margin-top: var(--local-gap);

    box-shadow: var(--woly-shadow);
  }

  ul[data-visible='true'] {
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
  }

  li {
    padding: var(--local-vertical) var(--local-horizontal);

    line-height: var(--woly-line-height);

    background: var(--local-background);
    color: var(--local-shape-color);

    cursor: pointer;

    &:hover {
      --local-background: var(--woly-canvas-disabled);
    }

    &:focus,
    &:active {
      outline: none;
      --local-shape-color: var(--woly-canvas-text-default);
    }
  }

  &:focus > div[data-selected],
  &:active > div[data-selected] {
    --local-border-color: var(--woly-focus);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &[data-open='true'] > div[data-selected] {
    border-color: var(--woly-focus);

    --local-shape-color: var(--woly-canvas-text-default);
  }

  &[data-disabled='true'] {
    pointer-events: none;

    --local-shape-color: var(--woly-canvas-text-disabled);
    --local-background: var(--woly-canvas-disabled);
    --local-border-input-color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, SelectProps & Variant>;
