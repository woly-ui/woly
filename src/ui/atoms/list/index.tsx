import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import { Box, Elements } from '../../elements/quarks';

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

const mapContainer = (properties: { columns: number } & Variant) => ({
  'data-variant': properties.variant || 'secondary',
});

const mapItem = (properties: ListItemProps & Variant) => ({
  'data-variant': properties.variant || 'secondary',
  'data-type': properties.as,
  'data-disabled': properties.disabled,
});

export const ListContainer = styled.div.attrs(mapContainer)`
  --local-gap: calc(var(--woly-border-width) * 2);

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--local-gap);
  background-color: var(--woly-shape-text-default);
  padding: 0;
  margin: 0;
` as StyledComponent<'div', Record<string, unknown>, Variant>;

/**
 * Fix ListItemContainer after implementing box element
 */
const ListItemContainer = styled(Box).attrs(mapItem)`
  --local-icon-color: var(--woly-canvas-text-default);
  --local-backgound: var(--woly-canvas-default);
  --local-color: var(--woly-canvas-text-default)

  cursor: pointer;
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);
  text-decoration: none;
  background-color: var(--local-backgound);
  color: var(--local-color);

  list-style-type: none;

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
` as StyledComponent<'div', Record<string, unknown>, ListItemProps & Variant>;

export const ListItem: React.FC<ListItemProps & ListElementsProps & Variant> = ({
  as,
  disabled = false,
  href,
  iconLeft,
  iconRight,
  tabIndex,
  text,
  variant = 'secondary',
}) => (
  <ListItemContainer
    as={as}
    href={href}
    disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    variant={variant}
  >
    <Elements text={text} iconLeft={iconLeft} iconRight={iconRight} variant={variant} />
  </ListItemContainer>
);
