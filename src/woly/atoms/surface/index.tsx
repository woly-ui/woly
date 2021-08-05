import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { mapColoring } from 'lib/coloring';

interface SurfaceProps {
  weight?: string;
}

const map = (properties: SurfaceProps & Priority) => ({
  'data-priority': properties.priority || 'secondary',
  'data-weight': properties.weight || 'goast',
  'data-coloring': mapColoring({
    inversed: properties.weight === 'fill',
  }),
});

export const Surface = styled.div.attrs(map)`
  z-index: 1;

  width: 100%;

  border-radius: var(--woly-rounding);

  &[data-weight='fill'] {
    background-color: var(--woly-shape-default);
    border-color: var(--woly-shape-default);
    box-shadow: 3px 3px 8px var(--woly-shape-default);
  }

  &[data-weight='goast'] {
    background-color: var(--woly-background);
    border-color: var(--woly-background);
    box-shadow: 3px 3px 8px var(--woly-shape-text-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, SurfaceProps & Priority>;
