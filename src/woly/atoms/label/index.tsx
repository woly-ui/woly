import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const LabelBase: React.FC<LabelProps & Priority> = ({
  children,
  className,
  priority = 'secondary',
}) => (
  <label className={className} data-priority={priority}>
    {children}
  </label>
);

export const Label = styled(LabelBase)`
  ${box}
  /* --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  ); */

  --local-color: var(--woly-canvas-text-default);

  padding: var(--local-vertical) var(--local-horizontal);

  color: var(--local-color);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);
` as StyledComponent<'label', Record<string, unknown>, LabelProps & Priority>;
