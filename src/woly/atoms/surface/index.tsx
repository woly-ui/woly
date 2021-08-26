import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

interface SurfaceProps {
  weight?: string;
}

const map = (properties: SurfaceProps & Priority) => ({
  'data-priority': properties.priority || 'secondary',
  'data-weight': properties.weight || 'goast',
});

export const Surface = styled.div.attrs(map)`
  z-index: 1;

  width: 100%;

  border-radius: var(--woly-rounding);

  &[data-weight='fill'] {
    color: var(--woly-shape-text-default);

    background-color: var(--woly-shape-default);
    border-color: var(--woly-shape-default);
    box-shadow: var(--woly-shadow);
  }

  &[data-weight='goast'] {
    background-color: var(--woly-background);
    border-color: var(--woly-background);
    box-shadow: var(--woly-shadow);
  }
` as StyledComponent<'div', Record<string, unknown>, SurfaceProps & Priority>;
