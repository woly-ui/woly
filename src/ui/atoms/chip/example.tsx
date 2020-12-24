import * as React from 'react';
import styled from 'styled-components';

import { Chip } from './index';
import { CloseIcon } from '../../../static/icons';
import { Global, block } from '../../../lib/box-styles';

export const ChipExample: React.FC = () => (
  <Chips>
    <Global>
      <block.N>
        <Chip
          text="Chip primary N"
          variant="primary"
          onClick={() => console.info('Chip clicked')}
        />
      </block.N>
      <block.XS>
        <Chip
          text="Chip secondary XS"
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
        />
      </block.XS>
      <block.N>
        <Chip
          text="Chip default N"
          icon={<CloseIcon />}
          onClick={() => console.info('Chip clicked')}
        />
      </block.N>
      <block.XS>
        <Chip
          text="Chip default XS"
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
