import React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';

type BaseSurfaceProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type SurfaceProps = BaseSurfaceProps & {
  weight?: 'ghost' | 'fill' | 'default';
};

const map = (props: SurfaceProps) => ({
  'data-priority': props.priority || 'secondary',
  'data-weight': props.weight || 'default',
});

export const Surface = styled.div.attrs(map)<SurfaceProps>`
  z-index: 1;

  width: 100%;

  border-radius: var(--woly-rounding);

  &[data-weight='fill'] {
    --local-color: var(--woly-shape-text-default);
    color: var(--local-color);

    background-color: var(--woly-shape-default);
    border-color: var(--woly-shape-default);
    box-shadow: var(--woly-shadow);
  }

  &[data-weight='ghost'] {
    background-color: var(--woly-background);
    border-color: var(--woly-background);
    box-shadow: var(--woly-shadow);
  }
`;
