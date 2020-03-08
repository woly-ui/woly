import * as React from 'react';
import { text, select } from '@storybook/addon-knobs';

import * as woly from '../src';

export default { title: 'Atoms' };

type Mapped<T extends string> = Record<T, T>;

export const Input = () => (
  <woly.Input placeholder="name" value={text('Text', 'display name')} />
);

export const Password = () => (
  <woly.Input type="password" value={text('Text', 'display name')} />
);

export const Title = () => {
  const levels = select('Level', [1, 2, 3], 1);
  return (
    <woly.Title as="h1" level={levels}>
      H{levels} Title
    </woly.Title>
  );
};

export const Form = () => (
  <woly.Block>
    <woly.Form handleSubmit={() => alert('Send!')}>
      <woly.Input placeholder="email" value={text('Text', 'display name')} />
      <woly.Button>Sign In</woly.Button>
    </woly.Form>
  </woly.Block>
);
