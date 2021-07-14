import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { ListContainer, ListItem, Surface } from 'ui/atoms';
import { Popover } from 'ui';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { keyHandlerGet, keyboardEventHandle } from 'lib';

interface SelectOptionProps {
  as?: 'a' | 'li';
  value: string;
  disabled?: boolean;
  path?: string;
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
  selected,
  priority = 'secondary',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const tabIndex = disabled ? -1 : 0;
  const select = selected ?? placeholder;

  // const onKeyDown = React.useCallback(
  //   (event: React.KeyboardEvent) => {
  //     const selectNode = selectRef.current;
  //     const dropdownNode = dropdownRef.current;

  //     if (!document || !selectNode || !dropdownNode || event.key === 'Tab') {
  //       return;
  //     }

  //     event.preventDefault();
  //     const keyHandler = keyHandlerGet({
  //       dropdownNode,
  //       isOpen,
  //       onChange,
  //       selectNode,
  //       setIsOpen(isOpen: true)
  //     });
  //     const shiftKeyHandler = { arrowDown: setIsOpen(false) };

  //     keyboardEventHandle({
  //       event,
  //       keyHandler: keyHandler,
  //       shiftKeyHandler
  //     });
  //   },
  //   [selectRef, dropdownRef, isOpen, onChange],
  // );
  return (
    <div
      className={className}
      data-disabled={disabled}
      data-open={isOpen}
      data-select
      data-priority={priority}
      onBlur={onBlur}
      onClick={() => setIsOpen(!isOpen)}
      onFocus={onFocus}
      ref={selectRef}
      tabIndex={tabIndex}
    >
      <Popover
        isOpen={isOpen}
        priority={priority}
        onClickOutside={() => setIsOpen(false)}
        content={
          <Surface priority={priority}>
            <ListContainer
              role="listbox"
              as="ul"
              priority={priority}
              aria-activedescendant={select}
              ref={dropdownRef}
            >
              {options.map(({ value, disabled, as, path, iconLeft, iconRight }) => (
                <ListItem
                  as={as}
                  disabled={disabled}
                  href={path}
                  iconLeft={iconLeft}
                  iconRight={iconRight}
                  key={value}
                  onClick={onChange}
                  role="option"
                  tabIndex={-1}
                  text={value}
                  priority={priority}
                />
              ))}
            </ListContainer>
          </Surface>
        }
      >
        <div data-selected>
          <div data-value>{select}</div>
          <span data-icon={isOpen}>{icon}</span>
        </div>
      </Popover>
    </div>
  );
};

export const Select = styled(SelectBase)`
  --local-list-background: var(--woly-shape-text-default);
  --local-border-list: var(--woly-canvas-default);
  --local-background: var(--woly-canvas-default);
  --local-shape-color: var(--woly-canvas-text-default);
  --local-border-input-color: var(--woly-canvas-text-active);

  position: relative;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  outline: none;
  cursor: pointer;

  & > div [data-selected] {
    ${box}

    display: flex;
    align-items: center;

    color: var(--local-shape-color);

    background: var(--local-background);
    border: var(--woly-border-width) solid var(--local-border-input-color);
    border-radius: var(--woly-rounding);

    [data-value] {
      flex: 1;
    }
  }

  [data-icon] {
    --local-icon-size: var(--woly-line-height);

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      fill: var(--local-shape-color);
    }
  }

  ${ListContainer} {
    position: absolute;
    z-index: 1;

    display: none;
    width: 100%;
    margin-top: var(--local-gap);
  }

  &[data-open='true'] ${ListContainer} {
    display: flex;
    flex-direction: column;
  }

  [data-icon='true'] > svg {
    transform: rotate(180deg);
  }

  &:focus,
  &:active {
    div[data-selected] {
      --local-border-color: var(--woly-focus-color);
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
    }
  }

  &[data-open='true'] > div[data-selected] {
    background-color: var(--local-list-background);
    border: var(--woly-border-width) solid var(--local-border-list);
    border-color: var(--woly-focus-color);
  }

  &[data-disabled='true'] {
    pointer-events: none;
    --local-shape-color: var(--woly-canvas-text-disabled);
    --local-background: var(--woly-canvas-disabled);
    --local-border-input-color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, SelectProps & Priority>;
