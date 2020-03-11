import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

type Styled<P extends {}> = StyledComponent<any, {}, P>;

interface Props {
  level?: 1 | 2 | 3;
}

interface InnerProps extends Props {
  className: string;
  children?: React.ReactNode;
}

const make = (properties: InnerProps) => {
  const level = properties.level ?? 1;
  // Be careful, Tag is just string, just plain HTML element
  const Tag = (`h${level}` as unknown) as React.ReactHTML['h1'];

  return (
    <Tag className={properties.className} data-level={level}>
      {properties.children}
    </Tag>
  );
};

export const Title: Styled<Props> = styled(make)`
  color: var(--title-color);

  &[data-level='1'] {
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
    margin-bottom: 5rem;
  }

  &[data-level='2'] {
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    margin-bottom: 4rem;
  }

  &[data-level='3'] {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    margin-bottom: 3rem;
  }
`;
