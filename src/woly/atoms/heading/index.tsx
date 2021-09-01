import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';

type BaseHeadingProps = React.LabelHTMLAttributes<HTMLLabelElement> & Priority;

export type HeadingProps = BaseHeadingProps & {
  children: React.ReactNode;
  size?: 1 | 2 | 3;
  weight?: 'regular' | 'medium';
};

const map = (props: HeadingProps) => ({
  'data-priority': props.priority || 'primary',
  'data-size': props.size || 1,
  'data-weight': props.weight || 'medium',
});

export const Heading = styled.span.attrs(map)<HeadingProps>`
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
`;
