import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyHandlerGet, keyboardEventHandle } from 'lib';
import { ListContainer, ListItem, Popover, Surface } from 'ui';


interface SelectOptionProps {
  as?: 'a' | 'li';
  content: React.ReactNode;
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
      <Popover
        isOpen={false}
        variant={variant}
        content={
          <Surface variant={variant}>
            <ListContainer role="listbox" variant={variant} ref={dropdownRef} data-visible={isOpen}>
              {options.map(({ id, content, disabled, as, href, iconLeft, iconRight }) => (
                <ListItem
                  as={as}
                  disabled={disabled}
                  href={href}
                  iconLeft={iconLeft}
                  iconRight={iconRight}
                  key={id}
                  role="option"
                  tabIndex={-1}
                  text={content}
                  variant={variant}
                />
              ))}
            </ListContainer>
          </Surface>
        }>
        <div data-selected>
          <div data-value>{select}</div>
          <span data-icon={isOpen}>{icon}</span>
        </div>
      </Popover>
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
    box-sizing: border-box;

    padding: var(--local-vertical) var(--local-horizontal);

    color: var(--local-shape-color);

    background: var(--local-background);

    border: var(--woly-border-width) solid var(--local-border-input-color);
    border-radius: var(--woly-rounding);

    [data-value] {
      flex: 1;
    }
  }

  [data-icon='true'] {
    transform: rotate(180deg);
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
    position: absolute;
    z-index: 1;

    display: none;
    width: 100%;
    margin-top: var(--local-gap);

    padding: 0;

    list-style-type: none;
  }

  ${ListContainer}[data-visible='true'] {
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
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
