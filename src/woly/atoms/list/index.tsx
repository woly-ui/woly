import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface ListElementsProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: React.ReactNode;
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
  priority = 'secondary',
  tabIndex,
  text,
}) => (
  <ListItemContainer
    as={as}
    href={href}
    disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    priority={priority}
  >
    {iconLeft && <span data-element="icon">{iconLeft}</span>}
    <span>{text}</span>
    {iconRight && <span data-element="icon">{iconRight}</span>}
  </ListItemContainer>
);

/**
 * Fix ListItemContainer after implementing box element
 */
const ListItemContainer = styled.div.attrs(mapItem)`
  ${box}
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

  &[data-disabled='true'] {
    --local-icon-color: var(--woly-canvas-text-disabled);
    --local-color: var(--woly-canvas-text-disabled);

    pointer-events: none;
  }
` as StyledComponent<'div', Record<string, unknown>, ListItemProps & Priority>;
