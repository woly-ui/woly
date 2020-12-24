import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-popover-rounding
 * --woly-popover-spacing-vertical
 * --woly-popover-spacing-horizontal
 * --woly-popover-position-top
 * --woly-popover-position-left
 * --woly-popover-position-right
 * --woly-popover-position-bottom
 * --woly-popover-background
 */

interface Props {
  className?: string;
  isOpen: boolean;
}

const PopoverBase: React.FC<Props & Variant> = ({
  children,
  isOpen,
  variant = 'default',
  ...p
}) => (
  <div data-open={isOpen} data-variant={variant} {...p}>
    {children}
  </div>
);

export const Popover = styled(PopoverBase)`
  position: absolute;
  top: var(--woly-popover-position-top, auto);
  right: var(--woly-popover-position-right, auto);
  bottom: var(--woly-popover-position-bottom, auto);
  left: var(--woly-popover-position-left, auto);

  padding: var(--woly-popover-spacing-vertical, 0)
    var(--woly-popover-spacing-horizontal, 0);

  background: var(--woly-popover-background, #fff);
  border-radius: var(--woly-popover-rounding, 0);
  visibility: hidden;

  &[data-open='true'] {
    visibility: visible;
  }
` as StyledComponent<'div', Record<string, unknown>, Props & Variant>;
