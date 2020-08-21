import { css } from 'styled-components';

import {
  InterfacesBoldTTF,
  InterfacesRegularTTF,
  InterfacesThinTTF,
} from '../static/fonts';

export const fonts = css`
  @font-face {
    font-weight: 300;
    font-family: 'TT Interfaces';
    font-style: normal;
    src: url('${InterfacesThinTTF}') format('truetype');
  }

  @font-face {
    font-weight: 400;
    font-family: 'TT Interfaces';
    font-style: normal;
    src: url('${InterfacesRegularTTF}') format('truetype');
  }

  @font-face {
    font-weight: 700;
    font-family: 'TT Interfaces';
    font-style: normal;
    src: url('${InterfacesBoldTTF}') format('truetype');
  }


`;
