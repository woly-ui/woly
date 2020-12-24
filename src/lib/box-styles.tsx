import styled from 'styled-components';

export const Global = styled.div`
  --woly-const-m: 6px;
  --woly-main-level: 3;

  [data-variant='default'] {
    --woly-button-color: black;
    --woly-button-background: lightgray;
  }

  [data-variant='primary'] {
    --woly-button-color: white;
    --woly-button-background: #6ab547;
  }

  [data-variant='secondary'] {
    --woly-button-color: white;
    --woly-button-background: grey;
    --woly-button-borders: #000000;
  }

  [data-variant='destructive'] {
    --woly-button-color: white;
    --woly-button-background: red;
  }
`;

const Block = styled.div`
  & > * + * {
    --gap: calc(
      (1px * var(--woly-main-level)) +
        (1px * var(--woly-main-level) * var(--woly-component-level))
    );
    margin-top: var(--gap, 1rem);
  }
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
`;

const XL = styled(Block)`
  --woly-component-level: 5;
`;

const H = styled(Block)`
  --woly-component-level: 6;
`;

export const block = { N, XS, S, M, L, XL, H };
