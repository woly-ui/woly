import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';
import { positionRelativeGet } from 'lib';

type PositionProps = 'bottom' | 'top' | 'left' | 'right';

interface TooltipProps {
  className?: string;
  column?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  position?: PositionProps;
  text: React.ReactNode;
}

const TooltipBase: React.FC<TooltipProps & Variant> = ({
  children,
  className,
  column = false,
  iconLeft,
  iconRight,
  position = 'top',
  text,
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
    <div
      className={className}
      data-position={tooltipPosition}
      data-variant={variant}
      ref={ref}
      tabIndex={0}
    >
      <div data-element="notifications" aria-labelledby="notifications-desc">
        {children}
      </div>
      <div role="tooltip" id="notifications-desc" data-direction={column}>
        {iconLeft && <div data-icon="tooltip-visual-block">{iconLeft}</div>}
        <div data-text="tooltip-description">{text}</div>
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
  --local-tooltip-maxsize: 200px;
  --local-icon-size: var(--woly-line-height);

  position: relative;

  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  outline: none;

  [role='tooltip'] {
    ${box}
    position: absolute;
    z-index: 1;

    display: none;
    align-items: center;

    box-sizing: border-box;
    width: max-content;
    max-width: var(--local-tooltip-maxsize);

    color: var(--local-color);

    background-color: var(--woly-background);

    border-color: var(--woly-background);
    border-style: solid;
    border-width: var(--woly-border-width);
    border-radius: calc(var(--woly-rounding) * 2);
    box-shadow: var(--woly-shadow);

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

  [data-icon='tooltip-visual-block'] {
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--local-icon-size);
    height: var(--local-icon-size);
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &:hover > [role='tooltip'],
  &:focus > [role='tooltip'] {
    display: flex;

    transition: 0.3s linear;
  }

  & [data-direction='true'] {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  [data-icon='tooltip-action-block'] {
    display: flex;
    align-items: center;

    & > :not(:last-child) {
      margin-right: var(--local-gap);
    }
  }

  &[data-position='top'] > [role='tooltip'] {
    bottom: var(--tooltip-position);

    &::after {
      bottom: calc(-3px - var(--woly-border-width));
      left: calc(var(--woly-const-m) * 2);

      transform: initial;
    }
  }

  &[data-position='bottom'] > [role='tooltip'] {
    top: var(--tooltip-position);

    &::after {
      top: calc(-3px - var(--woly-border-width));
      bottom: initial;
      left: calc(var(--woly-const-m) * 2);

      transform: rotate(180deg);
    }
  }

  &[data-position='left'] > [role='tooltip'] {
    top: 0;
    right: var(--tooltip-position);

    &::after {
      top: calc(var(--woly-const-m) * 2);
      right: calc(-4px - var(--woly-border-width));

      transform: rotate(-90deg);
    }
  }

  &[data-position='right'] > [role='tooltip'] {
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
