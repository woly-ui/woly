import React from 'react';
import ResizeDetector from 'react-resize-detector';

interface Params {
  of: React.MutableRefObject<HTMLElement | null>;
  with: React.MutableRefObject<HTMLElement | null>;
}

export function useSyncHeight({ of: fromRef, with: toRef }: Params) {
  const handleResize = () => {
    if (!fromRef.current) return;
    if (!toRef.current) return;
    const { height } = fromRef.current.getBoundingClientRect();
    toRef.current.style.height = height + 'px';
  };

  const detectorJSX = <ResizeDetector targetRef={fromRef} onResize={handleResize} />;

  return { detectorJSX };
}
