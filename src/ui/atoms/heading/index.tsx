import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
interface HeadingProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  size?: 1 | 2 | 3;
  weight?: 'regular' | 'medium';
}

const map = (properties: HeadingProps & Variant) => ({
  'data-size': properties.size || 1,
  'data-variant': properties.variant || 'default',
  'data-weight': properties.weight || 'medium',
});

export const Heading = styled.span.attrs(map)`
  --local-color: var(--woly-canvas-text-default);

  color: var(--local-color);
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
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
` as StyledComponent<'label', Record<string, unknown>, HeadingProps & Variant>;
