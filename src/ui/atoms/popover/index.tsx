import * as React from 'react';
import styled from 'styled-components';

/**
 * --popover-rounding
 * --popover-spacing-vertical
 * --popover-spacing-horizontal
 * --popover-position-top
 * --popover-position-left
 * --popover-position-right
 * --popover-position-bottom
 * --popover-background
 */

interface Props {
  className?: string;
  isOpen: boolean;
  variant?: string;
}

const PopoverBase: React.FC<Props> = ({
  children,
  className,
  isOpen,
  variant = 'default',
  ...p
}) => {
  return (
    <div className={className} data-open={isOpen} data-variant={variant} {...p}>
      {children}
    </div>
  );
};

export const Popover = styled(PopoverBase)`
  position: absolute;
  top: var(--popover-position-top, auto);
  right: var(--popover-position-right, auto);
  bottom: var(--popover-position-bottom, auto);
  left: var(--popover-position-left, auto);

  padding: var(--popover-spacing-vertical, 0)
    var(--popover-spacing-horizontal, 0);

  background: var(--popover-background, #fff);
  border-radius: var(--popover-rounding, 0);
  visibility: hidden;

  &[data-open='true'] {
    visibility: visible;
  }
`;
