import * as React from 'react';
import styled from 'styled-components';
import { Global, block } from 'box-styles';
import { Input } from 'ui';

export const InputExample: React.FC = () => (
  <form autoComplete="off">
    <Global>
      <InputWrappers>
        <Inputs>
          <span>Block L</span>
          <block.L>
            <Input
              type="text"
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On input change')}
              variant="base"
              disabled
            />
            <Input
              type="text"
              name="name"
              placeholder="Default"
              onChange={() => console.info('On input change')}
              variant="base"
            />
            <Input
              type="text"
              name="name"
              placeholder="Error"
              onChange={() => console.info('On input change')}
              variant="error"
            />
          </block.L>
        </Inputs>
        <Inputs>
          <span>Block M</span>
          <block.M>
            <Input
              type="text"
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On input change')}
              variant="base"
              disabled
            />
            <Input
              type="text"
              name="name"
              placeholder="Default"
              onChange={() => console.info('On input change')}
              variant="base"
            />
            <Input
              type="text"
              name="name"
              placeholder="Error"
              onChange={() => console.info('On input change')}
              variant="error"
            />
          </block.M>
        </Inputs>
        <Inputs>
          <span>Block S</span>
          <block.S>
            <Input
              type="text"
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On input change')}
              variant="base"
              disabled
            />
            <Input
              type="text"
              name="name"
              placeholder="Default"
              onChange={() => console.info('On input change')}
              variant="base"
            />
            <Input
              type="text"
              name="name"
              placeholder="Error"
              onChange={() => console.info('On input change')}
              variant="error"
            />
          </block.S>
        </Inputs>
      </InputWrappers>
    </Global>
  </form>
);

export const Inputs = styled.div`
  max-width: 300px;
  margin: 0 80px 0 0;

  ${block.S} > ${Input} {
    margin: 0 0 42px 0;
  }

  ${block.M} > ${Input} {
    margin: 0 0 36px 0;
  }

  ${block.L} > ${Input} {
    margin: 0 0 30px 0;
  }

  span {
    display: block;
    padding-bottom: 20px;
  }
`;
export const InputWrappers = styled.div`
  display: flex;
`;
