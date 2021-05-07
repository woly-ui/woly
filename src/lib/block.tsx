import styled from 'styled-components';

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
