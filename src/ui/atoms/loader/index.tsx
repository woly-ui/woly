import * as React from 'react';
import styled, { StyledComponent, keyframes } from 'styled-components';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';

interface LoaderProps {
  description?: string;
  className?: string;
}

const LoaderBase = ({
  description = 'Loading...',
  variant = 'primary',
  className,
}: LoaderProps & Variant) => {
  return (
    <div className={className} data-variant={variant}>
      <div data-loader>
        <svg viewBox="0 0 100 100" data-track>
          <circle data-spinner cx={50} cy={50} r={45} strokeWidth={10} />
        </svg>
        <div data-text>{description}</div>
      </div>
    </div>
  );
};

const trackAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg)
  }
`;

const spinnerAnimation = keyframes`
 0%,
  25% {
    stroke-dashoffset: 280;

    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;

    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;

    transform: rotate(360deg);
  }
`;

export const Loader = styled(LoaderBase)`
  ${box}
  --local-size: calc(
    1px * var(--woly-component-level) * var(--woly-main-level) * 4
  );
  --local-track-color: var(--woly-canvas-default);
  --local-spinner-color: var(--woly-shape-default);

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  [data-loader] {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  [data-track] {
    width: var(--local-size);
    height: var(--local-size);
    margin-bottom: calc(var(--local-gap) * 2);

    transform-origin: 50% 50%;

    animation: 2s linear infinite ${trackAnimation};

    fill: transparent;
  }

  [data-track] circle {
    transform-origin: 50% 50%;

    animation: 1.4s ease-in-out infinite both ${spinnerAnimation};

    stroke: var(--local-spinner-color);
    stroke-linecap: round;
    stroke-dashoffset: 280;
    stroke-dasharray: 283;
  }

  [data-text] {
    color: var(--woly-canvas-text-default);
    font-weight: 400;
    font-size: var(--woly-font-size);
    line-height: var(--woly-line-height);
    line-height: 21px;
    text-align: center;
  }
` as StyledComponent<'div', Record<string, unknown>, LoaderProps & Variant>;
