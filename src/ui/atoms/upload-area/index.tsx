import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

interface UploadAreaProps {
  className?: string;
  center?: boolean;
  content?: React.ReactNode;
}

const UploadAreaBase: React.FC<UploadAreaProps & Variant> = ({
  className,
  center = false,
  content,
  variant = 'default',
}) => (
  <div className={className} data-variant={variant} tabIndex={0}>
    <div data-content data-center={center}>
      <div data-overlay />
      {content}
    </div>
  </div>
);

export const UploadArea = styled(UploadAreaBase)`
  --local-border-color: var(--woly-canvas-hover);
  --local-background-color: var(--woly-canvas-disabled);

  width: 100%;
  height: 100%;

  position: relative;
  overflow: auto;

  background-color: var(--local-background-color);
  border: var(--woly-border-width) dashed var(--local-border-color);
  border-radius: var(--woly-rounding);

  [data-center='true'] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:focus {
    --local-border-color: var(--woly-focus);
    --local-background-color: rgba(110, 59, 254, 0.05);
    outline: none;

    [data-overlay] {
      width: 100%;
      height: 100%;

      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: rgba(110, 59, 254, 0.05);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, UploadAreaProps & Variant>;
