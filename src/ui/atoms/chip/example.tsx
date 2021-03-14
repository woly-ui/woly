import * as React from 'react';
import styled from 'styled-components';
import { Chip } from 'ui';
import { CloseIcon } from 'icons';
import { Global, block } from 'box-styles';

export const ChipExample: React.FC = () => (
  <Global>
    <Chips>
      <block.S>
        <span>Small</span>
        <Chip
          label="Chip primary S"
          role="button"
          variant="primary"
          tabIndex={0}
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
        />
        <Chip
          label="Chip secondary S"
          role="button"
          variant="secondary"
          tabIndex={0}
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconSecondaryWrapper>
              <CloseIcon />
            </IconSecondaryWrapper>
          }
        />
        <Chip
          label="Chip disabled S"
          role="button"
          variant="primary"
          tabIndex={0}
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconDisabledWrapper>
              <CloseIcon />
            </IconDisabledWrapper>
          }
          disabled
        />
        <Chip
          label="Chip without icon S"
          role="div"
          variant="primary"
         />
        <Chip
          label="Disabled chip without icon S"
          role="div"
          variant="primary"
          disabled
        />
      </block.S>
      <block.XS>
        <span>Extra Small</span>
        <Chip
          label="Chip primary XS"
          role="button"
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
        />
        <Chip
          label="Chip secondary XS"
          role="button"
          variant="secondary"
          tabIndex={0}
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconSecondaryWrapper>
              <CloseIcon />
            </IconSecondaryWrapper>
          }
        />
        <Chip
          label="Chip disabled XS"
          role="button"
          variant="primary"
          tabIndex={0}
          onClick={() => console.info('Chip clicked')}
          icon={
            <IconDisabledWrapper>
              <CloseIcon />
            </IconDisabledWrapper>
          }
          disabled
        />
        <Chip
          label="Chip without icon XS"
          role="div"
          variant="primary"
        />
        <Chip
          label="Disabled chip without icon XS"
          role="div"
          variant="primary"
          disabled
        />
      </block.XS>
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
