import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';

type BaseTextProps = React.BaseHTMLAttributes<HTMLParagraphElement> & Priority;

export type TextProps = BaseTextProps & {
  children: React.ReactNode;
  type?: 'L' | 'S' | 'XS' | 'M' | 'subtitle' | 'hint';
  weight?: 'medium' | 'regular' | 'light';
};

const map = (props: TextProps) => ({
  'data-priority': props.priority || 'primary',
  'data-type': props.type || 'subtitle',
  'data-weight': props.weight || 'regular',
});

export const Text = styled.p.attrs(map)<TextProps>`
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
`;
