import * as React from 'react';
import { ClosedEyeIcon, OpenedEyeIcon } from 'icons';
import { Global } from 'box-styles';
import { InputPassword } from 'ui';

export const InputPasswordExample: React.FC = () => (
  <Global>
    <InputPassword
      onChange={() => console.info('change')}
      name="input"
      iconHidden={<ClosedEyeIcon />}
      iconOpen={<OpenedEyeIcon />}
    />
  </Global>
);
