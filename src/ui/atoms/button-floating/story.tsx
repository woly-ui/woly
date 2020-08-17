import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import * as bf from '.';

export default { title: 'Atoms' };

const noop = () => undefined;

export const buttonFloating = () => (
  <div>
    <bf.Base icon={text('button icon', 'button icon path')} onClick={noop} />
  </div>
);
