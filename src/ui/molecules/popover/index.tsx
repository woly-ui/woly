import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Surface } from 'ui/atoms';
import { Variant } from 'lib/types';
import { positionRelativeGet } from 'lib';

interface Props {
  className?: string;
  content: React.ReactNode;
  isOpen: boolean;
  position?: PopoverPositionType;
}

type PopoverPositionType = 'top' | 'bottom';

const PopoverBase: React.FC<Props & Variant> = ({
  children,
  className,
  content,
  isOpen,
  position = 'bottom',
  variant = 'secondary',
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
    <div className={className} ref={ref} data-variant={variant}>
      <div onClick={setVisibility} onKeyDown={onKeyDown}>
        {children}
      </div>
      <Surface
        data-popover
        data-open={isVisible}
        data-position={popoverPosition}
        variant={variant}
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

  [data-popover] {
    position: absolute;
    z-index: 1;

    display: none;

    min-width: 100%;
  }

  & > [data-open='true'] {
    display: block;
  }

  & > [data-position='top'] {
    bottom: var(--popover-position);
  }
  & > [data-position='bottom'] {
    top: var(--popover-position);
  }
` as StyledComponent<'div', Record<string, unknown>, Props & Variant>;
