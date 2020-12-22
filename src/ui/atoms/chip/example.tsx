import * as React from 'react';
import styled from 'styled-components';

import { Chip } from './index';
import { CloseIcon } from '../../../static/icons';
import { Global, block } from '../../../lib/box-styles';

export const ChipExample: React.FC = () => (
  <Chips>
    <Global>
      <block.N>
        <Chip text="Chip N" onClick={() => console.info('Chip clicked')} />
      </block.N>
      <block.XS>
        <Chip text="Chip XS" onClick={() => console.info('Chip clicked')} />
      </block.XS>
      <block.N>
        <Chip
          text="Chip N"
          icon={<CloseIcon />}
          onClick={() => console.info('Chip clicked')}
        />
      </block.N>
      <block.XS>
        <Chip
          text="Chip XS"
          icon={<CloseIcon />}
          onClick={() => console.info('Chip clicked')}
        />
      </block.XS>
    </Global>
  </Chips>
);

export const Chips = styled.div`
  ${Global} {
    display: flex;
    flex-direction: row;
  }
  ${Chip} {
    margin: 0 10px 0 0;
  }
`;
