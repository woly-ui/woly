import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { positionRelativeGet } from 'lib';

/**
 * --woly-font-size
 * --woly-line-height
 * --woly-color
 * --woly-background
 * --woly-border
 * --woly-border-width
 * --woly-rounding
 *
 */

type PositionProps = 'bottom' | 'top' | 'left' | 'right';

interface TooltipProps {
  className?: string;
  message: React.ReactNode;
  position?: PositionProps;
}

const TooltipBase: React.FC<TooltipProps & Variant> = ({
  children,
  className,
  message,
  position = 'top',
  variant = 'secondary',
}) => {
  const [tooltipPosition, setPosition] = React.useState<PositionProps>('top');
  const ref = React.useRef<HTMLDivElement>(null);

  const onScroll = React.useCallback(() => {
    if (ref.current !== null) {
      const newPosition = positionRelativeGet(ref.current, position);
      setPosition(newPosition);
    }
  }, [position, ref]);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.document) return;

    setPosition(position);
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [position, ref]);

  return (
    <div className={className} data-position={tooltipPosition} data-variant={variant} ref={ref}>
      <div data-element>{children}</div>
      <div data-tooltip>{message}</div>
    </div>
  );
};

export const Tooltip = styled(TooltipBase)`
  --woly-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  --tooltip-position: calc(100% + 4px + var(--woly-gap, 10px));

  position: relative;

  font-size: var(--woly-font-size, 16px);
  line-height: 21px;

  &:hover {
    div[data-tooltip] {
      visibility: visible;
      opacity: 1;

      transition: 0.3s linear;
    }
  }

  div[data-tooltip] {
    position: absolute;
    z-index: 1;

    box-sizing: border-box;
    width: max-content;
    min-width: 112px;
    max-width: 240px;
    min-height: 48px;

    padding: 12px 18px;

    color: var(--woly-color, #000000);

    background-color: var(--woly-background, #ffffff);
    border-color: var(--woly-border, var(--woly-background, #ffffff));
    border-style: solid;
    border-width: var(--woly-border-width);
    border-radius: var(--woly-rounding, 6px);
    box-shadow: var(--woly-shadow);
    visibility: hidden;
    cursor: pointer;
    opacity: 0;

    transition: all 0.3s ease-in-out;

    &::after {
      position: absolute;

      width: 0;
      height: 0;

      border-color: var(--woly-background, #ffffff) transparent transparent transparent;
      border-style: solid;
      border-width: 4px 3px 0 3px;

      content: ' ';
    }

    &:hover {
      visibility: visible;
    }
  }

  &[data-position='top'] > [data-tooltip] {
    bottom: var(--tooltip-position);

    &::after {
      bottom: calc(-4px - var(--woly-border-width, 0px));
      left: 12px;

      transform: initial;
    }
  }

  &[data-position='bottom'] > [data-tooltip] {
    top: var(--tooltip-position);

    &::after {
      top: calc(-4px - var(--woly-border-width, 0px));
      bottom: initial;
      left: 12px;

      transform: rotate(180deg);
    }
  }

  &[data-position='left'] > [data-tooltip] {
    top: 0;
    right: var(--tooltip-position);

    &::after {
      top: 12px;
      right: calc(-5px - var(--woly-border-width, 0px));

      transform: rotate(-90deg);
    }
  }

  &[data-position='right'] > [data-tooltip] {
    top: 0;
    left: var(--tooltip-position);

    &::after {
      top: 12px;
      right: initial;
      left: calc(-5px - var(--woly-border-width, 0px));

      transform: rotate(90deg);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, TooltipProps & Variant>;
