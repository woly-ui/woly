import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import * as notification from './index';

export default { title: 'Atoms' };

export const notifications = () => {
  const content = text('Text', 'Label');
  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { notification } from 'woly'

          <notification.Base message={${content}} />
          `}
        </pre>
      </div>
      <notification.Base message={content} />
    </>
  );
};
