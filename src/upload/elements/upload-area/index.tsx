import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

interface UploadAreaProps {
  center?: boolean;
  className?: string;
  content?: React.ReactNode;
  disabled?: boolean;
  focus?: boolean;
}

const UploadAreaBase: React.FC<UploadAreaProps & Priority> = ({
  center = false,
  className,
  content,
<<<<<<< HEAD:src/woly/atoms/upload-area/index.tsx
  priority = 'default',
}) => (
  <div className={className} data-priority={priority} tabIndex={0}>
    <div data-content data-center={center}>
      <div data-overlay />
=======
  focus = false,
  priority = 'default',
}) => (
  <div className={className} data-priority={priority} data-focus={focus}>
    <div data-content data-position-center={center}>
>>>>>>> 76aab5df582124dcd900f1dcc7e9f44c2608dcff:src/upload/elements/upload-area/index.tsx
      {content}
    </div>
    <div data-overlay />
  </div>
);

export const UploadArea = styled(UploadAreaBase)`
  --local-border-color: var(--woly-canvas-hover);
  --local-background-color: var(--woly-canvas-disabled);
  position: relative;

  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: var(--local-background-color);
  border: var(--woly-border-width) dashed var(--local-border-color);
  border-radius: var(--woly-rounding);

  [data-position-center='true'] {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  &[data-focus='true'] {
    --local-border-color: var(--woly-canvas-active);

    outline: none;

    [data-overlay] {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;

      width: 100%;
      height: 100%;

      background: rgba(110, 59, 254, 0.05);
      transform: translate(-50%, -50%);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, UploadAreaProps & Priority>;
