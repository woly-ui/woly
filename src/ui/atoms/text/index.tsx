import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-hint-color
 * --woly-color
 */

interface TextProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  type?: 'L' | 'S' | 'XS' | 'M' | 'subtitle' | 'hint';
  weight?: 'medium' | 'regular' | 'light';
}

const map = (properties: TextProps & Variant) => ({
  'data-type': properties.type || 'subtitle',
  'data-variant': properties.variant || 'primary',
  'data-weight': properties.weight || 'regular',
});

export const Text = styled.p.attrs(map)`
  margin: 0;
  color: var(--woly-color, #000000);
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  &[data-type='subtitle'][data-weight='medium'] {
    font-weight: 500;
  }

  &[data-type='L'] {
    font-size: 21px;
    line-height: 24px;
  }

  &[data-type='S'] {
    font-size: 18px;
    line-height: 24px;
  }

  &[data-type='XS'] {
    font-size: 15px;
    line-height: 24px;
  }

  &[data-type='M'] {
    font-size: 12px;
    line-height: 24px;
  }

  &[data-type='hint'] {
    font-size: 12px;
    line-height: 15px;
    color: var(--woly-hint-color, #000000);
  }

  &[data-type='hint'][data-weight='light'] {
    font-weight: 300;
  }
` as StyledComponent<'span', Record<string, unknown>, TextProps & Variant>;
