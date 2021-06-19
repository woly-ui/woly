import * as React from 'react';
import styled, { StyledComponent, keyframes } from 'styled-components';
import { IconSpinner } from 'static/icons';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';

interface LoaderProps {
  className?: string;
  description?: React.ReactChild;
}

const LoaderBase = ({
  className,
  description = 'Loading...',
  variant = 'secondary',
}: LoaderProps & Variant) => {
  return (
    <div className={className} data-variant={variant}>
      <div data-loader>
        <IconSpinner data-track />
        <div data-description>{description}</div>
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
  --local-track-size: 42px;
  --local-vertical-gap: 12px;
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
    width: var(--local-track-size);
    height: var(--local-track-size);
    margin-bottom: var(--local-vertical-gap);

    transform-origin: 50% 50%;

    animation: 2s linear infinite ${trackAnimation};

    fill: transparent;
  }

  [data-track] circle {
    transform-origin: 50% 50%;

    animation: 1.4s ease-in-out infinite both ${spinnerAnimation};

    fill: none;

    stroke: var(--local-spinner-color);
    stroke-linecap: round;
    stroke-dashoffset: 280;
    stroke-dasharray: 283;
  }

  [data-description] {
    color: var(--woly-canvas-text-default);
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
  }
` as StyledComponent<'div', Record<string, unknown>, LoaderProps & Variant>;
