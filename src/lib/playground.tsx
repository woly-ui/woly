/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import React, { useRef } from 'react';

import { ConfiguratorName, Configurators } from './configurators';
import { Global } from './global';
import { block } from './block';
import { useSyncHeight } from './hooks/use-sync-height';
import { useUniqueID } from './hooks/use-unique-id';

export { block };

interface Props {
  size: keyof typeof block;
  direction: 'vertical' | 'horizontal';
  configurators: ConfiguratorName[];
}

export const Playground: React.FC<Props> = ({
  size = 'M',
  direction = 'horizontal',
  configurators = ['color'],
  children,
}) => {
  const scopeId = useUniqueID();

  const configuratorsRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const { detectorJSX } = useSyncHeight({ of: frameRef, with: configuratorsRef });

  const Wrapper = block[size];

  return (
    <PlaygroundWrapper>
      <Frame ref={frameRef}>
        <Global data-scope={scopeId}>
          <Wrapper>
            <Container data-dir={direction}>{children}</Container>
          </Wrapper>
        </Global>
      </Frame>
      <Configurators ref={configuratorsRef} id={scopeId} for={configurators} />
      {detectorJSX}
    </PlaygroundWrapper>
  );
};

interface StateType {
  change: (value: any) => any;
  children: (value: any, change: any) => React.ElementType;
  initial: any;
}

export interface StateCallback {
  change: (value: any) => any;
  value: any;
}

export const State = ({ initial, change, children }: StateType) => {
  const [value, setValue] = React.useState(initial);

  const onChange = React.useCallback(() => {
    setValue(change(value));
  }, [change, value]);

  return <>{children(value, onChange)}</>;
};

export const StateEvent = ({ initial, change, children }: StateType) => {
  const [value, setValue] = React.useState(initial);

  const onChange = React.useCallback(
    (event) => {
      setValue(change(event));
    },
    [change],
  );

  return <>{children(value, onChange)}</>;
};

const PlaygroundWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & + .prism-code {
    margin-top: 0;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Frame = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  overflow: auto;

  border: 2px solid rgb(246, 248, 250);
  border-radius: 4px 4px 0 0;

  resize: both;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &[data-dir='vertical'] {
    flex-direction: column;

    & > * + * {
      margin-top: 0.5rem;
    }
  }

  &[data-dir='horizontal'] {
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Content = styled.div`
  padding: 16px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Aside = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  width: 0;
  height: 100%;
  overflow-x: hidden;

  transition: 0.5s;

  li {
    display: block;

    color: #818181;
    text-decoration: none;

    transition: 0.3s;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  padding: 100px 30px;
`;

export const Line = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ColumnContent = styled.div`
  margin: 4px;
  padding: 10px;

  color: var(--palette-snow-0);

  background: var(--palette-lavender-500);
  border-radius: 6px;
`;

export const TableContent = styled.div`
  padding: 10px;
`;

export const Form = styled.form`
  width: 100%;

  & > div {
    margin-bottom: 10px;
  }
`;
