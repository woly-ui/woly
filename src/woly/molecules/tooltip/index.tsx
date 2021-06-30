import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { Surface } from 'ui';
import { positionRelativeGet } from 'lib';

type PositionProps = 'bottom' | 'left' | 'right' | 'top';

interface TooltipProps {
  className?: string;
  content?: string | React.ReactNode;
  position?: PositionProps;
}

const TooltipBase: React.FC<TooltipProps & Priority> = ({
  children,
  className,
  content,
  position = 'top',
  priority = 'secondary',
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
      data-priority={priority}
      ref={ref}
      tabIndex={0}
    >
      <div data-element="notifications" aria-labelledby="notifications-desc">
        {children}
      </div>
      <div role="tooltip" id="notifications-desc">
        <div data-triangle />
        <Surface data-priority={priority}>{content}</Surface>
      </div>
    </div>
  );
};

export const Tooltip = styled(TooltipBase)`
  --local-gap: min(
    calc(1px * var(--woly-main-level) + var(--woly-const-m)),
    calc(
      (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
    )
  );
  --local-triangel: min(
    var(--woly-const-m),
    calc(1px * var(--woly-component-level) * var(--woly-const-m))
  );

  --tooltip-position: calc(100% + var(--woly-border-width) + var(--local-gap));
  --local-tooltip-maxsize: 240px;
  --local-icon-size: var(--woly-line-height);

  position: relative;

  color: var(--woly-shape-text-default);

  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  outline: none;

  [role='tooltip'] {
    position: absolute;
    z-index: 1;

    align-items: center;

    box-sizing: border-box;
    width: max-content;
    max-width: var(--local-tooltip-maxsize);

    background-color: var(--woly-background);

    border-color: var(--woly-background);
    border-style: solid;
    border-width: var(--woly-border-width);
    border-radius: calc(var(--woly-rounding) * 2);
    box-shadow: var(--woly-shadow);

    visibility: hidden;
    opacity: 0;

    transition: 0.3s ease-in-out;

    [data-triangle] {
      position: absolute;

      width: 0;
      height: 0;

      border-color: var(--woly-background) transparent transparent transparent;
      border-style: solid;
      border-width: var(--local-triangel);
    }
  }

  &:hover [role='tooltip'],
  &:focus [role='tooltip'] {
    visibility: visible;
    opacity: 1;
  }

  &[data-position='top'] [role='tooltip'] {
    bottom: var(--tooltip-position);

    [data-triangle] {
      bottom: calc(-1 * (var(--woly-const-m) + var(--woly-border-width)));
      left: calc(2 * var(--woly-const-m));
    }
  }

  &[data-position='bottom'] [role='tooltip'] {
    top: var(--tooltip-position);

    [data-triangle] {
      top: calc(-1 * (var(--woly-const-m) + var(--woly-border-width)));
      left: calc(2 * var(--woly-const-m));

      transform: rotate(180deg);
    }
  }

  &[data-position='left'] [role='tooltip'] {
    top: 0;
    right: var(--tooltip-position);

    [data-triangle] {
      top: calc(2 * var(--woly-const-m));
      right: calc(-1 * (var(--woly-const-m) + var(--woly-border-width)));

      transform: rotate(-90deg);
    }
  }

  &[data-position='right'] [role='tooltip'] {
    top: 0;
    left: var(--tooltip-position);

    [data-triangle] {
      top: calc(2 * var(--woly-const-m));
      left: calc(-1 * (var(--woly-const-m) + var(--woly-border-width)));

      transform: rotate(90deg);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, TooltipProps & Priority>;
