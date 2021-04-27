import React from 'react';
import styled from 'styled-components';

export const Global = styled.div`
  --palette-snow-1000: #000000;
  --palette-snow-500: #c0c0c0;
  --palette-snow-300: #e5e5e5;
  --palette-snow-100: #f5f5f5;
  --palette-snow-0: #ffffff;

  --palette-lavender-500: #9381f1;
  --palette-lavender-300: #b0a3f4;
  --palette-lavender-100: #c9c0f8;

  --palette-dawn-300: #ff9097;

  /* should be rewritten to formulas */
  --woly-line-height: 24px;
  --woly-border-width: 1.5px;
  --woly-rounding: 4px;
  --woly-font-size: 15px;

  --woly-const-m: 6px;
  --woly-main-level: 3;

  --woly-neutral: var(--palette-snow-500);
  --woly-focus: var(--palette-lavender-500);
  --woly-background: var(--palette-snow-0);
  --woly-danger: var(--palette-dawn-300);
  
  [data-variant='primary'] {
    --woly-shape-default: var(--palette-lavender-300);
    --woly-shape-disabled: var(--palette-snow-300);
    --woly-shape-hover: var(--palette-lavender-100);
    --woly-shape-active: var(--palette-lavender-300);

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palette-snow-100);
    --woly-canvas-hover: var(--palette-snow-500);
    --woly-canvas-active: var(--palette-snow-500);

    --woly-canvas-text-default: var(--palette-snow-1000);
    --woly-canvas-text-disabled: var(--palette-snow-500);
    --woly-canvas-text-hover: var(--palette-snow-500);
    --woly-canvas-text-active: var(--palette-snow-500);
  }

  [data-variant='secondary'] {
    --woly-border-width: 1.5px;

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
    --woly-text-disabled: #e4e4e4;
    --woly-fill-disabled: #e4e4e4;
  }
  [data-variant='danger'] {
    --woly-shape-default: var(--woly-danger);
    --woly-shape-disabled: var(--palette-snow-300);
    --woly-shape-hover: var(--woly-danger);
    --woly-shape-active: var(--woly-danger);

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palette-snow-100);
    --woly-canvas-hover: var(--woly-danger);
    --woly-canvas-active: var(--woly-danger);

    --woly-canvas-text-default: var(--woly-danger);
    --woly-canvas-text-disabled: var(--palette-snow-500);
    --woly-canvas-text-hover: var(--woly-danger);
    --woly-canvas-text-active: var(--woly-danger);
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

export const ColumnContent = styled.div`
  background: var(--palette-lavender-500);
  color: var(--palette-snow-0);
  padding: 10px;
  border-radius: 6px;
  margin: 4px;
`;

export const TableContent = styled.div`
  padding: 10px;
`;
