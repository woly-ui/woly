import * as React from 'react';

import * as bf from '.';

export default { title: 'Atoms' };

const noop = () => undefined;

export const buttonFloating = () => (
  <div>
    <bf.Base onClick={noop} />
  </div>
);
