import * as React from 'react';
import styled from 'styled-components';
import { ArrowLeft, SearchIcon } from 'icons';
import { Button } from 'ui';
import { Global, block } from 'box-styles';

export const ButtonExample: React.FC = () => (
  <Inputs>
    <Global>
      <Buttons>
        <block.L>
          <Button variant="primary" text="Button" />
          <Button variant="secondary" text="Button" />
          <Button variant="primary" text="Button" disabled />
        </block.L>
        <block.M>
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
        <block.XS>
          <Button variant="primary" text="Button" />
          <Button variant="secondary" text="Button" />
          <Button variant="primary" text="Button" disabled />
        </block.XS>
        <block.N>
          <Button variant="primary" text="Button" />
          <Button variant="secondary" text="Button" />
          <Button variant="primary" text="Button" disabled />
        </block.N>
      </Buttons>
    </Global>
  </Inputs>
);
export const IconSecondaryWrapper = styled.div`
  path {
    fill: #683aef;
  }
`;

export const IconDisabledWrapper = styled.div`
  path {
    fill: #a39bb2;
  }
`;

export const IconWrapper = styled.div`
  path {
    fill: #fff;
  }
`;

export const Inputs = styled.div`
  ${block.L} > button {
    margin-bottom: 30px;
  }

  ${block.M} > button {
    margin-bottom: 36px;
  }

  ${block.S} > button {
    margin-bottom: 42px;
  }

  ${block.XS} > button {
    margin-bottom: 48px;
  }

  ${block.N} > button {
    margin-bottom: 54px;
  }

  div {
    padding-right: 40px;
  }

  & > div {
    display: flex;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;
