import * as React from 'react';

import { ClosedEyeIcon, OpenEyeIcon } from '../../../static/icons';
import { InputPassword } from '.';

export const InputPasswordExample: React.FC = () => (
  <InputPassword
    onChange={() => console.info('change')}
    name="input"
    iconHidden={<ClosedEyeIcon />}
    iconOpen={<OpenEyeIcon />}
  />
);
