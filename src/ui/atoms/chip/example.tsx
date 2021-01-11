import * as React from 'react';
import styled from 'styled-components';
import { Chip } from 'ui';
import { CloseIcon } from 'icons';
import { Global, block } from 'box-styles';

export const ChipExample: React.FC = () => (
  <Chips>
    <Global>
      <block.N>
        <Chip
          text="Chip primary N"
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
        />
      </block.N>
      <block.XS>
        <Chip
          text="Chip secondary XS"
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
          icon={<CloseIcon />}
        />
      </block.XS>
      <block.N>
        <Chip
          text="Chip default N"
          onClick={() => console.info('Chip clicked')}
        />
      </block.N>
      <block.XS>
        <Chip
          text="Chip default XS"
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

export const IconWrapper = styled.div`
  line-height: 0;

  svg > path {
    fill: #ffffff;
  }
`;
