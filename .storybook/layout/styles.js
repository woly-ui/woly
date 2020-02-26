import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fonts } from './fonts';

const globals = css`
  :root {
    --primary-font: 'TT Interfaces', serif;
    --primary: #000;
    --primary-text: #fff;
    --warning: var(--coral);
    --warning-text: #fff;
    --ghost-text: #1a1a23;
    --ghost-border: #a9aab3;
    --title-color: #1a1e23;
    --text-color: #000;
    --border-color: #f2f3f5;
    --body-bg: #fff;
    --block-bg: #fff;
    --conch: #d5d5dc;
    --coral: #f0254c;
    --pad: 12;
  }

  body,
  html {
    color: var(--text-color);
    font-family: var(--primary-font);
    font-size: 62.5%;
    font-weight: 400;
    height: 100%;
    line-height: 1.4;
    margin-left: auto;
    margin-right: auto;
    min-width: 320px;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
  }

  input {
    border: 0;
    background-color: transparent;
    outline: none;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }
`;

export const Styles = createGlobalStyle`
  ${normalize}
  ${fonts}
  ${globals}
`;
