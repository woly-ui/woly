import React from 'react';
import styled, { StyledComponent } from 'styled-components';

type AsC = string | React.ComponentType<{ className: string; children: React.ReactNode }>;

interface LevelDecrementProps {
  as?: AsC;
  className?: string;
  innerAs?: AsC;
  innerClassName?: string;
  children: React.ReactNode;
}

function LevelDecrementBase({
  children,
  as = 'div',
  className = '',
  innerAs = 'div',
  innerClassName = '',
  ...props
}: LevelDecrementProps) {
  const Container = as;
  const Inner = innerAs;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...props} className={className}>
      <Inner data-decrement-inner={true} className={innerClassName}>
        {children}
      </Inner>
    </Container>
  );
}

export const LevelDecrement = styled(LevelDecrementBase)`
  --woly-component-level-temp: max(calc(var(--woly-component-level) - 1), 0);

  & > [data-decrement-inner] {
    --woly-component-level: var(--woly-component-level-temp);
  }
` as StyledComponent<'div', Record<string, unknown>, LevelDecrementProps>;
