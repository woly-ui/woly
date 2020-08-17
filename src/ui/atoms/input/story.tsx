import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import * as woly from '.';

export default { title: 'Atoms/Input' };

const noop = () => undefined;

export const Input = () => (
  <woly.Base
    type="text"
    name={text('Input name', 'name')}
    placeholder={text('Placeholder', 'Enter your name here')}
    value={text('Value', 'full name')}
    onChange={noop}
  />
);
