import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { Surface } from 'ui/atoms';
import { positionRelativeGet } from 'lib/position-relative';
import { useUpdateEffect } from 'lib/hooks';

type BasePopoverProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type PopoverProps = BasePopoverProps & {
  content: React.ReactNode;
  isOpen: boolean;
  position?: PopoverPositionType;
  onClose?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

type PopoverPositionType = 'top' | 'bottom';

// TODO: solve the ref forwarding problem [31-08-2021]
const PopoverBase: React.FC<PopoverProps> = ({
  children,
  content,
  isOpen,
  position = 'bottom',
  priority = 'secondary',
  onClose = () => {},
  fullWidth = true,
  disabled = false,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isVisible, setVisibility] = React.useReducer((is) => !is, isOpen);
  const [popoverPosition, setPosition] = React.useState<PopoverPositionType>('bottom');

  const onScroll = React.useCallback(() => {
    if (ref.current === null) return;

    const newPosition = positionRelativeGet(ref.current, position);
    if (newPosition === 'top' || newPosition === 'bottom') {
      setPosition(newPosition);
    }
  }, [position, ref]);

  const onClickOutside = React.useCallback(
    (event) => {
      if (isVisible && ref.current === null) return;

      const trigger = ref.current;
      if (isVisible && !trigger?.contains(event.target)) {
        setVisibility();
      }
    },
    [ref, isVisible],
  );

  const onKeyDown = React.useCallback(
    ({ key }) => {
      if (isVisible && key === 'Escape') {
        setVisibility();
      }
    },
    [ref, isVisible],
  );

  React.useEffect(() => {
    setPosition(position);
  }, [position]);

  useUpdateEffect(() => {
    if (!isVisible) {
      onClose();
    }
  }, [isVisible]);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.document) return;

    document.addEventListener('scroll', onScroll);
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onScroll, onClickOutside]);

  return (
    <div ref={ref} {...rest}>
      <div onClick={setVisibility}>{children}</div>
      <Surface
        data-element="popover"
        data-full-width={fullWidth}
        data-open={!disabled && isVisible}
        data-position={popoverPosition}
        data-priority={priority}
      >
        {content}
      </Surface>
    </div>
  );
};

export const Popover = styled(PopoverBase)<PopoverProps>`
  --woly-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );
  --popover-position: calc(100% + 4px + var(--woly-gap, 10px));
  position: relative;
  [data-element='popover'] {
    position: absolute;
    z-index: 1;

    width: max-content;
    min-width: 100%;

    visibility: hidden;
    opacity: 0;
  }
  [data-full-width='false'] {
    width: auto;
    min-width: unset;
  }
  & > [data-open='true'] {
    visibility: visible;
    opacity: 1;
  }
  & > [data-position='top'] {
    bottom: var(--popover-position);
  }
  & > [data-position='bottom'] {
    top: var(--popover-position);
  }
`;
