import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

interface HeadingProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  size?: 1 | 2 | 3;
  weight?: 'regular' | 'medium';
}

const map = (properties: HeadingProps & Priority) => ({
  'data-priority': properties.priority || 'primary',
  'data-size': properties.size || 1,
  'data-weight': properties.weight || 'medium',
});

export const Heading = styled.span.attrs(map)`
  --local-color: var(--woly-canvas-text-default);

  color: var(--local-color);
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  &[data-size='2'] {
    font-size: 21px;
    line-height: 27px;
  }
  &[data-size='3'] {
    font-size: 18px;
    line-height: 24px;
  }
  &[data-weight='regular'] {
    font-weight: 400;
  }
` as StyledComponent<'label', Record<string, unknown>, HeadingProps & Priority>;
