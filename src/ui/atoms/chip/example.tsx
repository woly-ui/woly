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
          variant="primary"
          onClick={() => console.info('Chip clicked')}
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with close S
        </Chip>
        <Chip
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with close S
        </Chip>
        <Chip
          variant="primary"
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with icon S
        </Chip>
        <Chip
          variant="secondary"
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with icon S
        </Chip>
        <Chip variant="secondary" onClick={() => console.info('Chip clicked')}>
          Chip with text S
        </Chip>
        <Chip variant="primary" onClick={() => console.info('Chip clicked')}>
          Chip with text S
        </Chip>
        <Chip variant="primary">Chip without icon S</Chip>
        <Chip variant="primary" disabled>
          Disabled chip S
        </Chip>
      </block.S>
      <block.XS>
        <span>Extra Small</span>
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
          Chip with close XS
        </Chip>
        <Chip
          variant="secondary"
          onClick={() => console.info('Chip clicked')}
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with close XS
        </Chip>
        <Chip
          variant="primary"
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with icon XS
        </Chip>
        <Chip
          variant="secondary"
          action={
            <IconWrapper>
              <CloseIcon />
            </IconWrapper>
          }
          onActionClick={() => console.info('ActionIcon clicked')}>
          Chip with icon XS
        </Chip>
        <Chip variant="secondary" onClick={() => console.info('Chip clicked')}>
          Chip with text XS
        </Chip>
        <Chip variant="primary" onClick={() => console.info('Chip clicked')}>
          Chip with text XS
        </Chip>
        <Chip variant="primary">
          Chip without icon XS
        </Chip>
        <Chip variant="primary" disabled>
          Disabled chip XS
        </Chip>
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
