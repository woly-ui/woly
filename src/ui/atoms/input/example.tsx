import * as React from 'react';
import styled from 'styled-components';

import { Global, block } from '../../../lib/box-styles';
import { Input } from './index';

export const InputExample: React.FC = () => (
  <Inputs>
    <Global>
      <block.S>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name here"
          onChange={() => console.info('On input change')}
        />
      </block.S>
      <block.M>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name here"
          onChange={() => console.info('On input change')}
        />
      </block.M>
      <block.L>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name here"
          onChange={() => console.info('On input change')}
        />
      </block.L>
    </Global>
  </Inputs>
);

export const Inputs = styled.div`
  ${Input} {
    margin: 10px 0;
  }
`;
