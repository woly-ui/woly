import * as React from 'react';
import styled from 'styled-components';
import { ClosedEyeIcon, OpenedEyeIcon } from 'icons';
import { Global, block } from 'box-styles';
import { InputPassword } from 'ui';

export const InputPasswordExample: React.FC = () => (
  <Global>
    <block.S>
      <Inputs>
        <InputPassword
          iconHidden={<ClosedEyeIcon />}
          iconOpen={<OpenedEyeIcon />}
          name="input"
          onChange={() => console.info('change')}
          placeholder="Disabled"
          variant="base"
          disabled
        />
        <InputPassword
          iconHidden={<ClosedEyeIcon />}
          iconOpen={<OpenedEyeIcon />}
          name="input"
          onChange={() => console.info('change')}
          placeholder="Input password"
          variant="base"
        />
      </Inputs>
    </block.S>
  </Global>
);

export const Inputs = styled.div`
  max-width: 300px;

  ${InputPassword} {
    margin-bottom: 20px;
  }
`;
