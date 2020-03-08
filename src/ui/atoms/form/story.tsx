import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import * as woly from '..';

export default { title: 'Atoms' };

export const Form = () => (
  <woly.Block>
    <woly.Form onSubmit={() => alert('Send!')}>
      <woly.Input
        onChange={() => undefined}
        placeholder="email"
        value={text('Text', 'display name')}
      />
      <woly.Button text="Sign in" />
    </woly.Form>
  </woly.Block>
);
