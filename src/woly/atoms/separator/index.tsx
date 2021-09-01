import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';

type BaseSeparatorProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;
export type SeparatorProps = BaseSeparatorProps;

const SeparatorBase = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ priority, ...rest }, separatorRef) => (
    <div ref={separatorRef} data-priority={priority} {...rest}>
      <div data-element="line" />
    </div>
  ),
);

export const Separator = styled(SeparatorBase)<SeparatorProps>`
  --local-padding: calc(var(--woly-const-m) / 2);

  width: 100%;
  padding: calc(var(--local-padding) - (var(--woly-border-width) / 2)) 0;

  [data-element='line'] {
    height: var(--woly-border-width);

    background: var(--woly-canvas-disabled);
  }
`;
