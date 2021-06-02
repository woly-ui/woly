import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';
import { positionRelativeGet } from 'lib';

type PositionProps = 'bottom' | 'top' | 'left' | 'right';

interface TooltipProps {
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isOpen?: boolean;
  position?: PositionProps;
  text: React.ReactNode;
  tooltipRow?: boolean;
}

const TooltipBase: React.FC<TooltipProps & Variant> = ({
  children,
  className,
  tooltipRow = false,
  iconLeft,
  iconRight,
  isOpen = true,
  text,
  position = 'top',
  variant = 'secondary',
}) => {
  const [isContentVisible, setContentVisible] = React.useReducer((is) => !is, isOpen);
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

  const onKeyDown = React.useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        setContentVisible();
      }
    },
    [isContentVisible],
  );
  return (
    <div className={className} data-position={tooltipPosition} data-variant={variant} ref={ref}>
      <div
        data-element
        onClick={setContentVisible}
        data-open={isContentVisible}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
      <div data-tooltip data-row={tooltipRow}>
        {iconLeft && <div data-icon="tooltip-visual-block">{iconLeft}</div>}
        <div data-text="tooltip-message">{text}</div>
        {iconRight && <div data-icon="tooltip-action-block">{iconRight}</div>}
      </div>
    </div>
  );
};

export const Tooltip = styled(TooltipBase)`
  --local-color: var(--woly-canvas-text-default);
  --local-gap: min(
    calc(1px * var(--woly-main-level) + var(--woly-const-m)),
    calc(
      (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
    )
  );

  --tooltip-position: calc(100% + var(--woly-border-width) + var(--local-gap));

  position: relative;

  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  div[data-tooltip] {
    ${box}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 1;

    box-sizing: border-box;
    width: max-content;
    max-width: 240px;

    color: var(--local-color);

    background-color: var(--woly-background);

    border-color: var(--woly-background);
    border-style: solid;
    border-width: var(--woly-border-width);
    border-radius: calc(var(--woly-rounding) * 2);
    box-shadow: var(--woly-shadow);

    visibility: hidden;
    opacity: 0;

    transition: all 0.3s ease-in-out;

    &::after {
      position: absolute;

      width: 0;
      height: 0;

      border-color: var(--woly-background) transparent transparent transparent;
      border-style: solid;
      border-width: calc(var(--woly-border-width) * 2);
      border-bottom-width: 0;

      content: ' ';
    }
  }

  &:hover > div[data-tooltip],
  & > [data-open='true'] ~ div[data-tooltip] {
    visibility: visible;
    opacity: 1;

    transition: 0.3s linear;
  }

  [data-element] {
    outline: none;
  }

  & [data-row='true'] {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  & [data-icon='tooltip-action-block'] {
    display: flex;
    align-items: center;

    & > :not(:last-child) {
      margin-right: var(--local-gap);
    }
  }

  &[data-position='top'] > [data-tooltip] {
    bottom: var(--tooltip-position);

    &::after {
      bottom: calc(-3px - var(--woly-border-width));
      left: calc(var(--woly-const-m) * 2);

      transform: initial;
    }
  }

  &[data-position='bottom'] > [data-tooltip] {
    top: var(--tooltip-position);

    &::after {
      top: calc(-3px - var(--woly-border-width));
      bottom: initial;
      left: calc(var(--woly-const-m) * 2);

      transform: rotate(180deg);
    }
  }

  &[data-position='left'] > [data-tooltip] {
    top: 0;
    right: var(--tooltip-position);

    &::after {
      top: calc(var(--woly-const-m) * 2);
      right: calc(-4px - var(--woly-border-width));

      transform: rotate(-90deg);
    }
  }

  &[data-position='right'] > [data-tooltip] {
    top: 0;
    left: var(--tooltip-position);

    &::after {
      top: calc(var(--woly-const-m) * 2);
      right: initial;
      left: calc(-4px - var(--woly-border-width));

      transform: rotate(90deg);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, TooltipProps & Variant>;
