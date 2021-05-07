import { css } from 'styled-components';

export const verticalBox = css`
  --local-gap: var(--woly-const-m);

  & > *:not(:first-child) {
    padding-top: var(--local-gap);
  }

  & > :only-child {
    padding: 0;
  }
`;
