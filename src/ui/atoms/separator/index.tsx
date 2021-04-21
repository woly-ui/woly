import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

const SeparatorBase: React.FC<{ className: string } & Variant> = ({ className, variant }) => (
  <div className={className} data-variant={variant}>
    <div data-line></div>
  </div>
);

export const Separator = styled(SeparatorBase)`
  --local-padding: 3px;

  width: 100%;
  padding: calc(var(--local-padding) - (var(--woly-border-width) / 2)) 0;

  [data-line] {
    height: var(--woly-border-width);
    background: var(--woly-canvas-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, Variant>;
