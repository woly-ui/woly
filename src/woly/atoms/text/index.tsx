import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

interface TextProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  type?: 'L' | 'S' | 'XS' | 'M' | 'subtitle' | 'hint';
  weight?: 'medium' | 'regular' | 'light';
}

const map = (properties: TextProps & Priority) => ({
  'data-priority': properties.priority || 'primary',
  'data-type': properties.type || 'subtitle',
  'data-weight': properties.weight || 'regular',
});

export const Text = styled.p.attrs(map)`
  margin: 0;

  color: var(--local-color, var(--woly-canvas-text-default));
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  &[data-type='subtitle'][data-weight='medium'] {
    font-weight: 400;
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
    color: var(--local-color);
    font-size: 12px;
    line-height: 15px;
  }

  &[data-type='hint'][data-weight='light'] {
    font-weight: 300;
  }
` as StyledComponent<'span', Record<string, unknown>, TextProps & Priority>;
