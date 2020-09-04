import * as React from 'react';

import * as bi from '.';
import ClosedEyeIcon from '../../../static/icons/closed-eye.svg';

export default { title: 'Atoms' };

const noop = () => {
  // noop
};

export const buttonIcon = () => (
  <div>
    <bi.Base onClick={noop} icon={ClosedEyeIcon} />
  </div>
);
