import { css } from 'styled-components';

import {
  InterfacesThinTTF,
  InterfacesRegularTTF,
  InterfacesBoldTTF,
} from '../static/fonts';

export const fonts = css`
  @font-face {
    font-family: 'TT Interfaces';
    src: url('${InterfacesThinTTF}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interfaces';
    src: url('${InterfacesRegularTTF}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interfaces';
    src: url('${InterfacesBoldTTF}') format('truetype');
    font-weight: 700;
    font-style: normal;
  }


`;
