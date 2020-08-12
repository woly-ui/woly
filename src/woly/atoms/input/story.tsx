import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import * as woly from '.';

export default { title: 'Atoms/Input' };

const noop = () => undefined;

export const Input = () => (
  <woly.Input
    placeholder={text('Placeholder', 'Enter your name here')}
    value={text('Value', 'full name')}
    onChange={noop}
  />
);

export const Password = () => (
  <woly.Input
    type="password"
    placeholder="Enter your password"
    value={text('Text', 'display name')}
    onChange={noop}
  />
);
