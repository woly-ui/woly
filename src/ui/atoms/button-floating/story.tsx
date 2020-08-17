import * as React from 'react';
import { ReactComponent as ClosedEyeIcon } from '../../../static/icons/closed-eye.svg';

import * as bf from '.';

export default { title: 'Atoms' };

const noop = () => undefined;

export const buttonFloating = () => (
  <div>
    <bf.Base onClick={noop} icon={ClosedEyeIcon} />
  </div>
);
