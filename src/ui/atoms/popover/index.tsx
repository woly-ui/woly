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
  isOpen: boolean;
}

const Popover: React.FC<Props & { className?: string }> = ({
  isOpen,
  children,
  className,
  ...p
}) => {
  return (
    <div className={className} data-isOpen={isOpen} {...p}>
      {children}
    </div>
  );
};

export const Base = styled(Popover)`
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

  &[data-isOpen='true'] {
    visibility: visible;
  }
`;
