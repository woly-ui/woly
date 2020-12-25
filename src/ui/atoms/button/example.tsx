import * as React from 'react';
import styled from 'styled-components';
import { ArrowLeft, MoreIcon, SearchIcon } from 'icons';
import { Button } from 'ui';
import { Global, block } from 'box-styles';

export const ButtonExample: React.FC = () => (
  <Inputs>
    <Global>
      <div>
        <block.L>
          <Button
            right={
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
            }
            variant="primary"
            text="Button L Primary"
          />
        </block.L>
        <block.M>
          <Button
            text="Button M Secondary"
            variant="secondary"
            right={
              <IconWrapper>
                <MoreIcon />
              </IconWrapper>
            }
          />
        </block.M>
        <block.S>
          <Button text="Button S Destructive" variant="destructive" />
        </block.S>
      </div>
      <div>
        <block.XS>
          <Button
            left={<>⭐️</>}
            right={
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
            }
            text="Button XS"
          />
        </block.XS>
        <block.N>
          <Button text="Button N" left={<ArrowLeft />} />
        </block.N>
      </div>
    </Global>
  </Inputs>
);
export const IconWrapper = styled.div`
  path {
    fill: #fff;
  }
`;

export const Inputs = styled.div`
  button {
    margin: 10px;
  }

  & > div {
    display: flex;
  }
`;
