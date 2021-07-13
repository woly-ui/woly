import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
<<<<<<< HEAD:src/woly/organisms/select/index.tsx
import { ListContainer, ListItem, Popover } from 'ui';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';
=======
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
>>>>>>> 964d18a1ed696efe0ec51e23d417d264818da2e9:src/woly/molecules/select/index.tsx
import { keyHandlerGet, keyboardEventHandle } from 'lib';

interface SelectOptionProps {
  as?: 'a' | 'li';
  value: string;
  disabled?: boolean;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  id: string;
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
// in the future, should to set the number of items in the list
// and decide whether the list of select will contain a scroll or something else

export const SelectBase: React.FC<SelectProps & Priority> = ({
  className,
  disabled = false,
  icon,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder = '',
  priority = 'secondary',
  selected,
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
      const selectKeyHandler = keyHandlerGet({
        dropdownNode,
        isOpen,
        onChange,
        selectNode,
        setIsOpen,
      });
      const shiftKeyHandler = { arrowDown: setIsOpen };

      keyboardEventHandle({
        event,
        keyHandler: selectKeyHandler,
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
      data-priority={priority}
      onBlur={onBlur}
      onClick={setIsOpen}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      ref={selectRef}
      tabIndex={tabIndex}
    >
<<<<<<< HEAD:src/woly/organisms/select/index.tsx
      <Popover
        isOpen={isOpen}
=======
      <div data-selected>
        <div data-text>{select}</div>
        <span data-icon={isOpen}>{icon}</span>
      </div>
      {/* В дальнейшем использовать Popover и List для создания выпадающего списка элементов */}
      <ul
        aria-activedescendant={select}
        data-visible={isOpen}
>>>>>>> 964d18a1ed696efe0ec51e23d417d264818da2e9:src/woly/molecules/select/index.tsx
        ref={dropdownRef}
        variant={variant}
        content={
         <ListContainer role="listbox" variant={variant} aria-activedescendant={select} ref={dropdownRef}>
          {options.map(({ id, value, disabled, as, href, iconLeft, iconRight }) => (
            <ListItem
              as={as}
              disabled={disabled}
              href={href}
              iconLeft={iconLeft}
              iconRight={iconRight}
              key={id}
              onClick={onChange}
              role="option"
              tabIndex={-1}
              text={value}
              variant={variant}
            />
          ))}
         </ListContainer>
         }
      >
<<<<<<< HEAD:src/woly/organisms/select/index.tsx
        <div data-selected>
          <div data-value>{select}</div>
          <span data-icon={isOpen}>{icon}</span>
        </div>
      </Popover>
=======
        {options.map(({ children, value }) => (
          <li data-value={value} key={value} onClick={onChange} role="option" tabIndex={-1}>
            <span data-text>{children}</span>
          </li>
        ))}
      </ul>
>>>>>>> 964d18a1ed696efe0ec51e23d417d264818da2e9:src/woly/molecules/select/index.tsx
    </div>
  );
};

export const Select = styled(SelectBase)`
<<<<<<< HEAD:src/woly/organisms/select/index.tsx
=======
  --local-gap: var(--woly-const-m);

>>>>>>> 964d18a1ed696efe0ec51e23d417d264818da2e9:src/woly/molecules/select/index.tsx
  --local-background: var(--woly-canvas-default);
  --local-border-input-color: var(--woly-canvas-text-active);
  --local-gap: var(--woly-border-width);

  --local-shape-color: var(--woly-canvas-text-default);

  --local-list-background: var(--woly-shape-text-default);
  --local-border-list: var(--woly-canvas-default);

  --local-icon-size: var(--woly-line-height);

  position: relative;

  align-items: center;
  box-sizing: border-box;

  width: 100%;

  outline: none;
  cursor: pointer;

  [data-selected] {
    ${box}
    display: flex;
    align-items: center;
<<<<<<< HEAD:src/woly/organisms/select/index.tsx
    width: 100%;
=======
    box-sizing: border-box;
>>>>>>> 964d18a1ed696efe0ec51e23d417d264818da2e9:src/woly/molecules/select/index.tsx

    color: var(--local-shape-color);

    background: var(--local-background);

    border: var(--woly-border-width) solid var(--local-border-input-color);
    border-radius: var(--woly-rounding);

    [data-text] {
      flex: 1;
    }
  }

  [data-icon] {
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

  ${ListContainer} {
    display: none;
    margin-top: var(--local-gap);

    background-color: var(--local-list-background);
    border: var(--woly-border-width) solid var(--local-border-list);
  }

  [data-open='true'] > ${ListContainer} {
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
  }

<<<<<<< HEAD:src/woly/organisms/select/index.tsx
  [data-icon='true'] > svg {
    transform: rotate(180deg);
=======
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
>>>>>>> 964d18a1ed696efe0ec51e23d417d264818da2e9:src/woly/molecules/select/index.tsx
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
` as StyledComponent<'div', Record<string, unknown>, SelectProps & Priority>;
