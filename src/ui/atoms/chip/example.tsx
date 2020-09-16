import * as React from 'react';
import styled from 'styled-components';

import * as chip from './index';
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
          icon={<>🎃</>}
          onClick={() => console.info('Chip clicked')}
        />
      </block.N>
      <block.XS>
        <Chip
          text="Chip XS"
          icon={<>🎃</>}
          onClick={() => console.info('Chip clicked')}
        />
      </block.XS>
    </Global>
  </Chips>
);

export const Chip = styled(chip.Base)`
  --chip-background-color: #6ab547;
  --chip-color: #ffffff;
  --chip-focus: #d5d5dc;
`;

export const Chips = styled.div`
  ${Global} {
    display: flex;
    flex-direction: row;
  }
  ${Chip} {
    margin: 0 10px 0 0;
  }
`;
