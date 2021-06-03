import * as React from 'react';
import styled, { StyledComponent, keyframes } from 'styled-components';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';

interface LoaderProps {
  description?: string;
  className?: string;
}

const LoaderBase = ({ description = 'Loading...', variant, className }: LoaderProps & Variant) => {
  return (
    <div className={className} data-variant={variant}>
      <div data-loader>
        <svg data-track>
          <path d="M10.117 6.663a18 18 0 0016.867 31.314" data-track-segment />
          <path d="M35.978 11.016A18 18 0 007.33 9.29" data-track-segment />
          <path d="M37.976 15.016a18.001 18.001 0 00-9.203-10.251" data-track-segment />
        </svg>
        <div data-text>{description}</div>
      </div>
    </div>
  );
};

const trackAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(LoaderBase)`
  ${box}
  --local-size: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  color: var(--woly-canvas-text-default);
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  [data-loader] {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  [data-track] {
    width: var(--local-size);
    height: var(--local-size);

    margin-bottom: 20px;

    transform-origin: 50% 50%;

    animation: 0.8s ${trackAnimation} cubic-bezier(0.2, 0, 0.38, 0.9) infinite;

    fill: transparent;
  }

  [data-track-segment] {
    stroke-width: 6;
  }
  [data-track-segment]:nth-child(1) {
    stroke: var(--palette-lavender-500);
  }
  [data-track-segment]:nth-child(2) {
    stroke: var(--palette-lavender-300);
  }
  [data-track-segment]:nth-child(3) {
    stroke: var(--palette-lavender-100);
  }

  [data-text] {
    line-height: var(--woly-line-height);
    text-align: center;
  }
` as StyledComponent<'div', Record<string, unknown>, LoaderProps & Variant>;
