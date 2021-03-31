import * as React from 'react';
import styled from 'styled-components';
import { Chip } from 'ui';
import { CloseIcon } from 'icons';
import { Global, block } from 'box-styles';

/**
 * Variants             | Icon            | Action
 * Size     | Disabled  | False  | True   | False   | True
 * ---------|-----------|--------|--------|---------|-------
 * Small    | False     |
 *          | True      |
 *
 * Normal   | False     |
 *          | True      |
 */

const configuration = {
  vertical: {
    icon: [false, true],
    action: [false, true],
  },
  horizontal: {
    size: ['small', 'normal'],
    disabled: [false, true],
  },
};

export const ChipExample: React.FC = () => (
  <Global>
    <Chips>
      <block.S>
        <span>Small</span>
        <Chip
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}
        >
          Click chip and icon S
        </Chip>
        <Chip
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}
        >
          Click chip and icon S
        </Chip>
      </block.S>
    </Chips>
  </Global>
);

export const Chips = styled.div`
  display: flex;
  flex-direction: row;

  ${Chip} {
    margin: 0 10px 0 0;
  }

  ${block.S} > div {
    margin-bottom: 26px;
  }

  ${block.XS} > div {
    margin-bottom: 32px;
  }

  ${block.S} > span, ${block.XS} > span {
    display: block;
    padding-bottom: 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg > path {
    fill: #683aef;
  }
`;

export const IconSecondaryWrapper = styled(IconWrapper)`
  svg > path {
    fill: #683aef;
  }
`;

export const IconDisabledWrapper = styled(IconWrapper)`
  svg > path {
    fill: #a39bb2;
  }
`;
