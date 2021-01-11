import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
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
  top: var(--woly-popover-position-top, 0);
  right: var(--woly-popover-position-right, 0);
  bottom: var(--woly-popover-position-bottom, 0);
  left: var(--woly-popover-position-left, 0);

  padding: var(--woly-popover-spacing-vertical, 300px)
    var(--woly-popover-spacing-horizontal, 300px);

  background: var(--woly-popover-background, #00000063);
  visibility: hidden;

  &[data-open='true'] {
    visibility: visible;
  }
` as StyledComponent<'div', Record<string, unknown>, Props & Variant>;
