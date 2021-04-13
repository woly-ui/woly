import React from 'react';
import styled from 'styled-components';

export const Global = styled.div`
  --palette-snow-1000: #000000;
  --palette-snow-500: #c0c0c0;
  --palette-snow-100: #f5f5f5;
  --palette-snow-0: #ffffff;
  --palette-lavender-500: #9381f1;

  /* should be rewritten to formulas */
  --woly-line-height: 24px;
  --woly-border-width: 1.5px;
  --woly-rounding: 4px;
  --woly-font-size: 15px;

  --woly-const-m: 6px;
  --woly-main-level: 3;

  --woly-neutral: var(--palette-snow-500);
  --woly-focus: #9381f1;
  --woly-background: #ffffff;

  [data-variant='primary'] {
    --woly-shape-default: #b0a3f4;
    --woly-shape-disabled: #e5e5e5;
    --woly-shape-hover: #c9c0f8;
    --woly-shape-active: #b0a3f4;

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palete-snow-100);
    --woly-canvas-hover: var(--palette-snow-500);
    --woly-canvas-active: var(--palette-snow-500);

    --woly-canvas-text-default: var(--palette-snow-1000);
    --woly-canvas-text-disabled: var(--woly-snow-500);
    --woly-canvas-text-hover: var(--woly-snow-500);
    --woly-canvas-text-active: var(--woly-snow-500);
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
    --woly-hint-color: #ff9097;

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
  children: (value: any, change: any) => React.ElementType;
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

export const Modal = styled.div`
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
