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
      <block.XS>
        <span>Extra small</span>
        <Chip
          text="Chip secondary XS"
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
        />
        <Chip
          text="Chip secondary XS"
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconSecondaryWrapper>
              <CloseIcon />
            </IconSecondaryWrapper>
          }
        />
        <Chip
          text="Chip secondary XS"
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconDisabledWrapper>
              <CloseIcon />
            </IconDisabledWrapper>
          }
          disabled
        />
      </block.XS>
      <block.N>
        <span>None</span>
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
        <Chip
          text="Chip primary N"
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconSecondaryWrapper>
              <CloseIcon />
            </IconSecondaryWrapper>
          }
        />
        <Chip
          text="Chip primary N"
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconDisabledWrapper>
              <CloseIcon />
            </IconDisabledWrapper>
          }
          disabled
        />
      </block.N>
    </Chips>
  </Global>
);

export const Chips = styled.div`
  display: flex;
  flex-direction: row;

  ${Chip} {
    margin: 0 10px 0 0;
  }

  ${block.XS} > button {
    margin-bottom: 26px;
  }

  ${block.N} > button {
    margin-bottom: 32px;
  }

  ${block.XS} > span, ${block.N} > span {
    display: block;
    padding-bottom: 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg > path {
    fill: #ffffff;
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
