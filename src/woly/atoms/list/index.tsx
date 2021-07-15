import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface ListElementsProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  role?: string;
}

interface ListItemProps {
  as?: 'a' | 'li';
  disabled?: boolean;
  href?: string;
  tabIndex?: number;
}

const mapContainer = (properties: { columns: number } & Priority) => ({
  'data-priority': properties.priority || 'secondary',
});

const mapItem = (properties: ListItemProps & Priority) => ({
  'data-disabled': properties.disabled,
  'data-priority': properties.priority || 'secondary',
  'data-type': properties.as,
});

export const ListContainer = styled.div.attrs(mapContainer)`
  --local-gap: calc(var(--woly-border-width) * 2);

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--local-gap);

  margin: 0;
  padding: 0;

  background-color: var(--woly-shape-text-default);
` as StyledComponent<'div', Record<string, unknown>, Priority>;

export const ListItem: React.FC<ListItemProps & ListElementsProps & Priority> = ({
  as,
  disabled = false,
  href,
  iconLeft,
  iconRight,
  onClick,
  role,
  priority = 'secondary',
  tabIndex,
  text,
}) => (
  <ListItemContainer
    as={as}
    href={href}
    disabled={disabled}
    onClick={onClick}
    role={role}
    tabIndex={disabled ? -1 : tabIndex}
    priority={priority}
  >
    {iconLeft && <span data-icon>{iconLeft}</span>}
    <span data-item-text>{text}</span>
    {iconRight && <span data-icon>{iconRight}</span>}
  </ListItemContainer>
);

const ListItemContainer = styled.div.attrs(mapItem)`
  ${box}

  --local-icon-color: var(--woly-shape-text-default);
  --local-backgound: var(--woly-shape-default);
  --local-color: var(--woly-shape-text-default);
  --local-icon-size: var(--woly-line-height);

  display: flex;
  align-items: center;

  width: 100%;

  color: var(--local-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  text-decoration: none;

  list-style-type: none;

  background: var(--local-backgound);
  cursor: pointer;

  [data-icon] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      width: 100%;
      height: 100%;

      fill: var(--local-icon-color);
    }
  }

  [data-item-text] {
    flex: 1;
    flex-wrap: nowrap;
  }

  &:hover {
    --local-backgound: var(--woly-shape-hover);
    --local-icon-color: var(--woly-shape-text-hover);
    --local-color: var(--woly-shape-text-hover);
  }

  &:active {
    --local-backgound: var(--woly-shape-active);
    --local-icon-color: var(--woly-shape-text-active);
    --local-color: var(--woly-shape-text-active);
  }

  &[data-type='a']:focus-within,
  &[data-type='li']:focus {
    --local-backgound: var(--woly-shape-active);
    --local-icon-color: var(--woly-shape-text-active);
    --local-color: var(--woly-shape-text-active);

    outline: none;
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &[data-disabled='true'] {
    --local-backgound: var(--woly-shape-disabled);
    --local-icon-color: var(--woly-shape-text-disabled);
    --local-color: var(--woly-shape-text-disabled);

    pointer-events: none;
  }
` as StyledComponent<'div', Record<string, unknown>, ListItemProps & Priority>;
