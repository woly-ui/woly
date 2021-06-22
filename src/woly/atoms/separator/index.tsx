import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

const SeparatorBase: React.FC<{ className: string } & Priority> = ({ className, priority }) => (
  <div className={className} data-priority={priority}>
    <div data-line />
  </div>
);

export const Separator = styled(SeparatorBase)`
  --local-padding: calc(var(--woly-const-m) / 2);

  width: 100%;
  padding: calc(var(--local-padding) - (var(--woly-border-width) / 2)) 0;

  [data-line] {
    height: var(--woly-border-width);

    background: var(--woly-canvas-disabled);
  }
` as StyledComponent<'div', Record<string, unknown>, Priority>;
