import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-font-size
 * --woly-label-color
 * --woly-line-height
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}
const LabelBase: React.FC<LabelProps & Variant> = ({
  children,
  variant = 'default',
}) => <label data-variant={variant}>{children}</label>;

export const Label = styled(LabelBase)`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );

  padding: var(--woly-vertical, 6px) var(--woly-horizontal, 6px);

  display: block;

  color: var(--woly-color, #000000);
  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);
` as StyledComponent<'span', Record<string, unknown>, LabelProps & Variant>;
