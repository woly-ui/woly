import styled from 'styled-components';

export const Global = styled.div`
  --const-m: 6px;
  --main-level: 3;
`;

const Block = styled.div`
  & > * + * {
    --gap: calc(
      (1px * var(--main-level)) +
        (1px * var(--main-level) * var(--component-level))
    );
    margin-top: var(--gap, 1rem);
  }
`;

const N = styled(Block)`
  --component-level: 0;
`;

const XS = styled(Block)`
  --component-level: 1;
`;

const S = styled(Block)`
  --component-level: 2;
`;

const M = styled(Block)`
  --component-level: 3;
`;

const L = styled(Block)`
  --component-level: 4;
`;

const XL = styled(Block)`
  --component-level: 5;
`;

const H = styled(Block)`
  --component-level: 6;
`;

export const block = { N, XS, S, M, L, XL, H };
