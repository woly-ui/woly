import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { Surface } from 'ui/atoms';
import { positionRelativeGet } from 'lib';

interface Props {
  className?: string;
  content: React.ReactNode;
  isOpen: boolean;
  position?: PopoverPositionType;
  onClickOutside?: () => void;
}

type PopoverPositionType = 'top' | 'bottom';

const PopoverBase: React.FC<Props & Priority> = ({
  children,
  className,
  content,
  isOpen,
  position = 'bottom',
  priority = 'secondary',
  onClickOutside: clickOutside,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isVisible, setVisibility] = React.useState(isOpen);
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
        setVisibility(false);
        clickOutside?.();
      }
    },
    [ref, isVisible],
  );

  const onKeyDown = React.useCallback(
    ({ key }) => {
      if (isVisible && key === 'Escape') {
        setVisibility(false);
      }
    },
    [ref, isVisible],
  );

  React.useEffect(() => {
    setPosition(position);
  }, [position]);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.document) return;

    document.addEventListener('scroll', onScroll);
    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClickOutside);
    };
  }, [onScroll, onClickOutside]);

  return (
    <div className={className} ref={ref} data-priority={priority}>
      <div
        onClick={() => {
          setVisibility(true);
        }}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
      <Surface
        data-popover
        data-open={isVisible}
        data-position={popoverPosition}
        data-priority={priority}
      >
        {content}
      </Surface>
    </div>
  );
};

export const Popover = styled(PopoverBase)`
  --local-gap: var(--woly-const-m);

  --popover-position: calc(100% + var(--local-gap));
  position: relative;

  width: 100%;

  [data-open] {
    position: absolute;
    z-index: 1;

    display: none;
  }

  [data-open='true'] {
    display: block;
    width: 100%;
  }

  & > [data-position='top'] {
    bottom: var(--popover-position);
  }
  & > [data-position='bottom'] {
    top: var(--popover-position);
  }
` as StyledComponent<'div', Record<string, unknown>, Props & Priority>;
