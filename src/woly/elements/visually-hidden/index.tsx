import { css } from 'styled-components';

export const visuallyHidden = css`
  position: absolute;

  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;

  border: 0;

  clip: rect(0 0 0 0);
`;
