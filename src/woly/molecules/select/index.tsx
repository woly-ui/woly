import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { keyHandlerGet, keyboardEventHandle } from 'lib/keyboard';

interface SelectOptionProps {
  children: React.ReactNode;
  value: string;
}

type BaseSelectProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type SelectProps = BaseSelectProps & {
  disabled?: boolean;
  icon?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  options: SelectOptionProps[];
  placeholder?: string;
  selected: string | null;
};

// TODO: solve the ref forwarding problem [31-08-2021]
export const SelectBase: React.FC<SelectProps> = ({
  disabled = false,
  icon,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder = '',
  priority = 'secondary',
  selected,
  ...rest
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
      ref={selectRef}
      data-disabled={disabled}
      data-open={isOpen}
      data-element="select"
      data-priority={priority}
      onBlur={onBlur}
      onClick={setIsOpen}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      {...rest}
    >
      <div data-selected={true}>
        <div data-element="text">{select}</div>
        <div data-box-role="icon">
          <span data-element="icon">{icon}</span>
        </div>
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
            <span data-element="text">{children}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Select = styled(SelectBase)<SelectProps>`
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
    ${box}

    display: flex;
    align-items: center;
    box-sizing: border-box;

    color: var(--local-shape-color);

    background: var(--local-background);

    border: var(--woly-border-width) solid var(--local-border-input-color);
    border-radius: var(--woly-rounding);

    [data-element='text'] {
      flex: 1;
    }
  }

  [data-element='icon'] {
    display: flex;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;

    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      width: 100%;
      height: 100%;

      fill: var(--local-shape-color);
    }
  }

  &[data-open='true'] [data-element='icon'] {
    transform: rotate(180deg);
  }

  ul {
    position: absolute;
    z-index: 1;

    display: none;
    width: 100%;
    margin-top: var(--local-gap);

    padding: 0;

    list-style-type: none;

    background: var(--local-list-background);

    border: var(--woly-border-width) solid var(--local-border-list);
    border-radius: var(--woly-rounding);

    box-shadow: var(--woly-shadow);
  }

  ul[data-visible='true'] {
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
  }

  li {
    ${box}

    display: flex;

    color: var(--local-shape-color);

    line-height: var(--woly-line-height);

    background: var(--local-background);

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
`;
