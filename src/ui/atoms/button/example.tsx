import * as React from 'react';
import styled from 'styled-components';

import * as button from './index';
import { Global, block } from '../../../lib/box-styles';

export const ButtonExample: React.FC = () => (
  <Inputs>
    <Global>
      <div>
        <block.S>
          <button.Primary left={<>🌴</>} text="Button S" />
        </block.S>
        <block.M>
          <button.Secondary left={<>🧠</>} text="Button M" />
        </block.M>
        <block.L>
          <button.Destructive right={<>✖</>} text="Button L" />
        </block.L>
      </div>
      <div>
        <block.XS>
          <button.Primary right={<>👍🏻</>} text="Button XS" />
        </block.XS>
        <block.N>
          <button.Primary right={<>⭐️</>} left={<>⭐️</>} text="Button N" />
        </block.N>
      </div>
    </Global>
  </Inputs>
);

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
