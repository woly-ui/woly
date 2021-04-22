import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const map = (properties: LabelProps & Variant) => ({
  'data-variant': properties.variant || 'default',
});

export const Label = styled.label.attrs(map)`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical));

  padding: var(--woly-vertical, 6px) var(--woly-horizontal, 6px);

  color: var(--woly-label-color, #000000);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);
` as StyledComponent<'label', Record<string, unknown>, LabelProps & Variant>;
