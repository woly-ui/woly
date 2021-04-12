import * as React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'ui';
import { Global, block } from 'box-styles';

import { Tooltip } from './';

export const TooltipExample: React.FC = () => (
  <Global>
    <TooltipWrapper>
      <block.S>
        <Tooltip message="Подсказка может быть написана в две строки и более" position="bottom">
          <Button onClick={() => console.info('Hi!')} text="Button" variant="primary" />
        </Tooltip>
        <Tooltip message="Подсказка" position="top" id="tooltip-top">
          <Button onClick={() => console.info('Hi!')} text="Button" variant="primary" />
        </Tooltip>
        <Tooltip message="Подсказка может быть написана в две строки" position="left">
          <Button onClick={() => console.info('Hi!')} text="Button" variant="primary" />
        </Tooltip>
        <Tooltip message="Подсказка" position="right" variant="primary">
          <Input
            name="name"
            onChange={() => console.info('On input change')}
            type="text"
            variant="base"
          />
        </Tooltip>
      </block.S>
    </TooltipWrapper>
  </Global>
);

export const TooltipWrapper = styled.div`
  ${block.S} {
    display: flex;
    align-items: center;
    & > div {
      margin: 0 20px 0 0;
    }
  }
`;
