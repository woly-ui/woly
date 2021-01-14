import * as React from 'react';
import styled from 'styled-components';
import { ArrowLeft, SearchIcon } from 'icons';
import { Button } from 'ui';
import { Global, block } from 'box-styles';

export const ButtonExample: React.FC = () => (
  <Global>
    <Buttons>
      <block.L>
        <span>Large</span>

        <Button variant="primary" text="Button" />
        <Button variant="secondary" text="Button" />
        <Button variant="primary" text="Button" disabled />
      </block.L>
      <block.M>
        <span>Normal</span>
        <Button
          variant="primary"
          text="Button"
          right={
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
          }
        />
        <Button
          variant="secondary"
          text="Button"
          right={
            <IconSecondaryWrapper>
              <SearchIcon />
            </IconSecondaryWrapper>
          }
        />
        <Button
          variant="primary"
          text="Button"
          right={
            <IconDisabledWrapper>
              <SearchIcon />
            </IconDisabledWrapper>
          }
          disabled
        />
      </block.M>
      <block.S>
        <span>Small</span>
        <Button
          variant="primary"
          text="Button"
          left={
            <IconWrapper>
              <ArrowLeft />
            </IconWrapper>
          }
        />
        <Button
          variant="secondary"
          text="Button"
          left={
            <IconSecondaryWrapper>
              <ArrowLeft />
            </IconSecondaryWrapper>
          }
        />
        <Button
          variant="primary"
          text="Button"
          disabled
          left={
            <IconDisabledWrapper>
              <ArrowLeft />
            </IconDisabledWrapper>
          }
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
