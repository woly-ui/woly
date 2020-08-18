import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import * as surface from '.';

export default { title: 'Atoms' };

export const surfaces = () => {
  const content = text('Content', 'Content');
  return (
    <div>
      <surface.Base>{content}</surface.Base>
    </div>
  );
};
