import React from 'react';

type AsC = string | React.ComponentType<{ className: string; children: React.ReactNode }>;

interface LevelDecrementProps {
  as?: AsC;
  className?: string;
  wrapperAs?: AsC;
  wrapperClassName?: string;
  children: React.ReactNode;
}

export function LevelDecrement({
  children,
  as = 'div',
  className = '',
  wrapperAs = 'div',
  wrapperClassName = '',
  ...props
}: LevelDecrementProps) {
  const Wrapper = wrapperAs;
  const Inner = as;

  return (
    <Wrapper data-woly-component-level-decrement-wrapper={true} className={wrapperClassName}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Inner {...props} data-woly-component-level-decrement-inner={true} className={className}>
        {children}
      </Inner>
    </Wrapper>
  );
}
