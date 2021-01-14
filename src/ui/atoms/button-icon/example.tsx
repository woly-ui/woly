import * as React from 'react';
import styled from 'styled-components';
import { ButtonIcon } from 'ui';
import { Global, block } from 'box-styles';
import { OpenedEyeIcon, SearchIcon } from 'icons';

export const ButtonIconExample: React.FC = () => (
  <Global>
    <Buttons>
      <block.L>
        <span>Large</span>
        <ButtonIcon
          icon={<SearchIcon />}
          onClick={() => console.info('ButtonIcon clicked')}
          variant="primary"
        />
        <ButtonIcon
          icon={<OpenedEyeIcon />}
          onClick={() => console.info('ButtonIcon clicked')}
          variant="secondary"
        />
      </block.L>
      <block.M>
        <span>Normal</span>
        <ButtonIcon
          icon={<SearchIcon />}
          onClick={() => console.info('ButtonIcon clicked')}
          variant="primary"
        />
        <ButtonIcon
          icon={<OpenedEyeIcon />}
          onClick={() => console.info('ButtonIcon clicked')}
          variant="secondary"
        />
      </block.M>
      <block.S>
        <span>Small</span>
        <ButtonIcon
          icon={<SearchIcon />}
          onClick={() => console.info('ButtonIcon clicked')}
          variant="primary"
        />
        <ButtonIcon
          icon={<OpenedEyeIcon />}
          onClick={() => console.info('ButtonIcon clicked')}
          variant="secondary"
        />
      </block.S>
    </Buttons>
  </Global>
);
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: #fff;
  }
`;

export const IconSecondaryWrapper = styled(IconWrapper)`
  path {
    fill: #683aef;
  }
`;

export const IconDisabledWrapper = styled(IconWrapper)`
  path {
    fill: #a39bb2;
  }
`;

export const Buttons = styled.div`
  display: flex;

  ${block.L} > button {
    margin-bottom: 30px;
  }

  ${block.M} > button {
    margin-bottom: 36px;
  }

  ${block.S} > button {
    margin-bottom: 42px;
  }

  ${block.S} > span, ${block.M} > span, ${block.L} > span {
    padding-bottom: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    padding-right: 40px;
  }
`;
