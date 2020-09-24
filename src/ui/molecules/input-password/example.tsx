import * as React from 'react';

import * as inputPassword from '.';
import { ClosedEyeIcon, OpenEyeIcon } from '../../../static/icons';

export const InputPasswordExample: React.FC = () => (
  <inputPassword.Base
    onChange={() => console.info('change')}
    name="input"
    iconHidden={<ClosedEyeIcon />}
    iconOpen={<OpenEyeIcon />}
  />
);
