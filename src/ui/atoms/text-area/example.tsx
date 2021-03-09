import * as React from 'react';
import styled from 'styled-components';
import { Global, block } from 'box-styles';
import { TextArea } from 'ui';

export const TextAreaExample: React.FC = () => (
  <form autoComplete="off">
    <Global>
      <TextAreaWrappers>
        <TextAreas>
          <span>Large</span>
          <block.L>
            <TextArea
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="base"
              disabled
            />
            <TextArea
              name="name"
              placeholder="Default"
              onChange={() => console.info('On textarea change')}
              variant="base"
            />
            <TextArea
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="error"
            />
          </block.L>
        </TextAreas>
        <TextAreas>
          <span>Normal</span>
          <block.M>
            <TextArea
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="base"
              disabled
            />
            <TextArea
              name="name"
              placeholder="Default"
              onChange={() => console.info('On textarea change')}
              variant="base"
            />
            <TextArea
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="error"
            />
          </block.M>
        </TextAreas>
        <TextAreas>
          <span>Small</span>
          <block.S>
            <TextArea
              name="name"
              placeholder="Disabled"
              onChange={() => console.info('On textarea change')}
              variant="base"
              disabled
            />
            <TextArea
              name="name"
              placeholder="Default"
              onChange={() => console.info('On textarea change')}
              variant="base"
            />
            <TextArea
              name="name"
              placeholder="Error"
              onChange={() => console.info('On textarea change')}
              variant="error"
            />
          </block.S>
        </TextAreas>
      </TextAreaWrappers>
    </Global>
  </form>
);

export const TextAreas = styled.div`
  max-width: 300px;
  margin: 0 80px 0 0;

  ${block.S} > ${TextArea} {
    margin: 0 0 48px 0;
  }

  ${block.M} > ${TextArea} {
    margin: 0 0 42px 0;
  }

  ${block.L} > ${TextArea} {
    margin: 0 0 36px 0;
  }

  span {
    display: block;
    padding-bottom: 20px;
  }
`;
export const TextAreaWrappers = styled.div`
  display: flex;
`;
