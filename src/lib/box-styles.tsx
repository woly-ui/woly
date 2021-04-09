import React from 'react';
import styled from 'styled-components';

export const Global = styled.div`
  --woly-const-m: 6px;
  --woly-main-level: 3;
  --woly-line-height: 24px;
  --woly-height: 100%;

  [data-variant='primary'] {
    --woly-background: #b0a3f4;
    --woly-border: #b0a3f4;
    --woly-color: #ffffff;
    --woly-hint-color: #c4c4c4;

    --woly-background-hover: #c9c0f8;
    --woly-border-hover: #c9c0f8;
    --woly-color-hover: #ffffff;

    --woly-background-focus: #9381f1;
    --woly-border-focus: #9381f1;
    --woly-color-focus: #ffffff;

    --woly-background-active: #b0a3f4;
    --woly-border-active: #9381f1;
    --woly-color-active: #ffffff;

    --woly-background-disabled: #f5f5f5;
    --woly-border-disabled: #f5f5f5;
    --woly-color-disabled: #c0c0c0;
  }

  [data-variant='secondary'] {
    --woly-border-width: 2px;

    --woly-background: #ffffff;
    --woly-border: #b0a3f4;
    --woly-color: #b0a3f4;
    --woly-hint-color: #c4c4c4;

    --woly-background-hover: #ffffff;
    --woly-border-hover: #c9c0f8;
    --woly-color-hover: #c9c0f8;

    --woly-background-focus: #ffffff;
    --woly-border-focus: #9381f1;
    --woly-color-focus: #9381f1;

    --woly-background-disabled: #c0c0c0;
    --woly-border-disabled: #c0c0c0;
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='base'] {
    --woly-border-width: 1px;
    --woly-rounding: 0;
    --woly-background: #ffffff;
    --woly-border: #a39bb2;
    --woly-color: #000000;
    --woly-hint-color: #c4c4c4;

    --woly-border-focus: #b0a3f4;

    --woly-background-disabled: #c0c0c0;
    --woly-border-disabled: #c0c0c0;
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='error'] {
    --woly-border-width: 1px;

    --woly-background: #ffffff;
    --woly-border: #eb5656;
    --woly-color: #000000;
    --woly-label-color: #eb5656;
    --woly-canvas-color: #eb5656;

    --woly-border-focus: #eb5656;
    --woly-error-text: #eb5656;
    --woly-hint-color: #c4c4c4;

    --woly-background-disabled: #c0c0c0;
    --woly-border-disabled: #c0c0c0;
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='square'] {
    --woly-rounding: 3px;
    --woly-canvas: #f4f2f7;
    --woly-background: #b0a3f4;
  }

  [data-variant='round'] {
    --woly-rounding: 30px;
    --woly-canvas: #f4f2f7;
    --woly-background: #b0a3f4;
  }
`;

const Block = styled.div`
  --woly-font-size: 15px;
`;

const N = styled(Block)`
  --woly-component-level: 0;
`;

const XS = styled(Block)`
  --woly-component-level: 1;
`;

const S = styled(Block)`
  --woly-component-level: 2;
`;

const M = styled(Block)`
  --woly-component-level: 3;
`;

const L = styled(Block)`
  --woly-component-level: 4;
  --woly-font-size: 18px;
`;

const XL = styled(Block)`
  --woly-component-level: 5;
  --woly-font-size: 21px;
`;

const H = styled(Block)`
  --woly-component-level: 6;
  --woly-font-size: 21px;
`;

export const block = { N, XS, S, M, L, XL, H };

export const Playground: React.FC<{
  size: keyof typeof block;
  direction: 'vertical' | 'horizontal';
}> = ({ size = 'M', direction = 'horizontal', children }) => {
  const Wrapper = block[size];
  return (
    <Frame>
      <Global>
        <Wrapper>
          <Container data-dir={direction}>{children}</Container>
        </Wrapper>
      </Global>
    </Frame>
  );
};

type StateType = {
  change: (value: any) => any;
  children: (value: any, change: any) => void;
  initial: any;
};

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

const Frame = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  overflow: auto;

  border: 2px solid var(--base, rgb(246, 248, 250));
  border-radius: 4px;
  border-bottom-right-radius: 0;

  border-bottom-left-radius: 0;

  resize: both;

  & + .prism-code {
    margin-top: 0;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
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

    & > * + * {
      margin-left: 0.5rem;
    }
  }
`;

export const Content = styled.div`
  padding: 16px;
`;

export const FormBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Aside = styled.div`
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  position: absolute;
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;

  li {
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 100px 30px;
  box-sizing: border-box;
`;
