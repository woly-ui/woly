import * as React from 'react';

import { ClosedEyeIcon, OpenEyeIcon } from '../../../static/icons';
import { Global } from '../../../lib/box-styles';
import { InputPassword } from '.';

export const InputPasswordExample: React.FC = () => (
  <Global>
    <InputPassword
      onChange={() => console.info('change')}
      name="input"
      iconHidden={<ClosedEyeIcon />}
      iconOpen={<OpenEyeIcon />}
    />
  </Global>
);
