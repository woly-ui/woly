import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

type BaseLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & Priority;

export type LabelProps = BaseLabelProps & {
  children: React.ReactNode;
};

const map = (props: LabelProps) => ({
  'data-priority': props.priority || 'secondary',
});

export const Label = styled.label.attrs(map)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-color: var(--woly-canvas-text-default);

  padding: var(--local-vertical) var(--local-horizontal);

  color: var(--local-color);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);
` as StyledComponent<'label', Record<string, unknown>, LabelProps>;
