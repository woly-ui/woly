import * as React from 'react';
import styled from 'styled-components';

import * as button from './index';
import { ArrowLeft, MoreIcon, SearchIcon } from '../../../static/icons';
import { Global, block } from '../../../lib/box-styles';

export const ButtonExample: React.FC = () => (
  <Inputs>
    <Global>
      <div>
        <block.S>
          <button.Primary
            right={
              <IconWrapper>
                <MoreIcon />
              </IconWrapper>
            }
            text="Button S"
          />
        </block.S>
        <block.M>
          <button.Secondary left={<ArrowLeft />} text="Button M" />
        </block.M>
        <block.L>
          <button.Destructive
            right={
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
            }
            text="Button L"
          />
        </block.L>
      </div>
      <div>
        <block.XS>
          <button.Primary
            right={
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
            }
            left={<>⭐️</>}
            text="Button XS"
          />
        </block.XS>
        <block.N>
          <button.Primary text="Button N" />
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
  --primary-bg: #6ab547;
  --secondary-bg: var(--base);
  --secondary-text: #333;
  --destructive-bg: var(--accent);

  button {
    margin: 10px;
  }

  & > div {
    display: flex;
  }
`;
