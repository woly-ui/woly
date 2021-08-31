import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { forwardRef } from 'react';

type BaseListContainerProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;
export type ListContainerProps = BaseListContainerProps;

type BaseListItemProps = React.BaseHTMLAttributes<HTMLElement> & Priority;

export type ListItemProps = BaseListItemProps & {
  disabled?: boolean;
  selected?: boolean;
  href?: string;
  tabIndex?: number;
  onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: React.ReactNode;
};

const mapContainer = (props: ListContainerProps) => ({
  'data-priority': props.priority || 'secondary',
});

export const ListContainer = styled.ul.attrs(mapContainer)<ListContainerProps>`
  --local-gap: calc(var(--woly-border-width) * 2);

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--local-gap);
  margin: 0;
  padding: 0;

  background-color: var(--woly-shape-text-default);
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      disabled = false,
      iconLeft,
      iconRight,
      priority = 'secondary',
      tabIndex,
      text,
      selected = false,
      onClick,
      ...rest
    },
    listItemRef,
  ) => {
    return (
      <li
        ref={listItemRef}
        data-disabled={disabled}
        data-selected={selected}
        tabIndex={disabled ? -1 : tabIndex}
        data-priority={priority}
        onClick={onClick}
        {...rest}
      >
        {iconLeft && <span data-element="icon">{iconLeft}</span>}
        <span>{text}</span>
        {iconRight && <span data-element="icon">{iconRight}</span>}
      </li>
    );
  },
);

/**
 * Fix ListItemContainer after implementing box element
 */
export const ListItem = styled(BaseListItem)<ListItemProps>`
  ${box};

  --local-icon-color: var(--woly-canvas-text-default);
  --local-backgound: var(--woly-canvas-default);
  --local-color: var(--woly-canvas-text-default);

  color: var(--local-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);
  text-decoration: none;

  list-style-type: none;

  background-color: var(--local-backgound);
  cursor: pointer;

  span {
    svg > path {
      fill: var(--local-icon-color);
    }
  }

  &:hover {
    --local-backgound: var(--woly-canvas-disabled);
  }

  &[data-type='a']:focus-within,
  &[data-type='li']:focus {
    --local-icon-color: var(--woly-shape-text-active);
    --local-backgound: var(--woly-focus);
    --local-color: var(--woly-shape-text-active);

    outline: none;
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &[data-selected='true'] {
    --local-icon-color: var(--woly-shape-text-active);
    --local-backgound: var(--woly-shape-active);
    --local-color: var(--woly-shape-text-active);
  }

  &[data-disabled='true'] {
    --local-icon-color: var(--woly-canvas-text-disabled);
    --local-color: var(--woly-canvas-text-disabled);

    pointer-events: none;
  }
`;
