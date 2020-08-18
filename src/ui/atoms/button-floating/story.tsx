import * as React from 'react';

import * as bf from '.';
import { ReactComponent as ClosedEyeIcon } from '../../../static/icons/closed-eye.svg';

export default { title: 'Atoms' };

const noop = () => {
  // noop
};

export const buttonFloating = () => (
  <div>
    <bf.Base onClick={noop} icon={ClosedEyeIcon} />
  </div>
);
