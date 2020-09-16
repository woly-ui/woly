import * as React from 'react';
import styled from 'styled-components';

import * as input from './index';
import { Global, block } from '../../../lib/box-styles';

export const InputExample: React.FC = () => (
  <Inputs>
    <Global>
      <block.S>
        <input.Base
          type="text"
          name="name"
          placeholder="Enter your name here"
          onChange={() => console.info('On input change')}
        />
      </block.S>
      <block.M>
        <input.Base
          type="text"
          name="name"
          placeholder="Enter your name here"
          onChange={() => console.info('On input change')}
        />
      </block.M>
      <block.L>
        <input.Base
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
  ${input.Base} {
    margin: 10px 0;
  }
`;
