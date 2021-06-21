import React from 'react';
import styled from 'styled-components';
import { Surface } from 'ui';

import { Global } from './global';
import { block } from './block';

export { block };

interface StateType {
  change: (value: any) => any;
  children: (value: any, change: any) => React.ElementType;
  initial: any;
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

export const Playground: React.FC<{
  size: keyof typeof block;
  direction: 'vertical' | 'horizontal';
}> = ({ size = 'M', direction = 'horizontal', children }) => {
  const Size = block[size];
  const [expanded, toggleExpand] = React.useReducer((is) => !is, false);

  return (
    <Frame>
      <Tools data-expanded={expanded}>
        <div data-tools>
          <label>Background</label>
          <select>
            <option value="default" selected>
              default
            </option>
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
          </select>
        </div>
        <button onClick={toggleExpand} data-toggler>
          ⚙️
        </button>
      </Tools>
      <Global>
        <Surface>
          <Size>
            <Container data-dir={direction}>{children}</Container>
          </Size>
        </Surface>
      </Global>
    </Frame>
  );
};

const Frame = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;

  border: 2px solid var(--base);
  border-radius: 4px 4px 0 0;

  & + .prism-code {
    margin-top: 0;

    border-color: var(--base);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Tools = styled.div`
  display: flex;
  justify-content: end;

  padding: 0.4rem 1rem;

  background-color: var(--base);

  [data-toggler] {
    height: 24px;
    margin: 0;
    padding: 0.2rem;

    background: transparent;

    border: 0;
  }

  [data-tools] {
    display: flex;
    align-items: center;

    font-size: 14px;

    & > * {
      margin-right: 0.2rem;
    }
  }

  &[data-expanded='false'] {
    margin-bottom: -24px;

    background-color: transparent;

    [data-tools] {
      display: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;

  overflow: auto;

  resize: both;

  &[data-dir='vertical'] {
    flex-direction: column;

    & > * + * {
      margin-top: 0.4rem;
    }
  }

  &[data-dir='horizontal'] {
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      margin: 0.2rem;
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
