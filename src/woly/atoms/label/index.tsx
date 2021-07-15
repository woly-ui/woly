import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const map = (properties: LabelProps & Priority) => ({
  'data-priority': properties.priority || 'secondary',
});

export const Label = styled.div.attrs(map)`
  ${box}

  --local-color: var(--woly-canvas-text-default);

  padding: var(--local-vertical) var(--local-horizontal);

  color: var(--local-color);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);
` as StyledComponent<'label', Record<string, unknown>, LabelProps & Priority>;
