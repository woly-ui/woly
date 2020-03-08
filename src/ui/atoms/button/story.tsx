import * as React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';

import * as woly from '../../..';
import * as button from '.';

export default { title: 'Atoms' };

type Mapped<T extends string> = Record<T, T>;

const ButtonVariants: Mapped<button.ButtonVariants> = {
  primary: 'primary',
  warning: 'warning',
  text: 'text',
  default: 'default',
};

const ButtonSizes: Mapped<button.ButtonSizes> = {
  default: 'default',
  small: 'small',
};

export const Button = () => {
  const variants = select('Variant', ButtonVariants, 'default');
  const sizes = select('Size', ButtonSizes, 'default');

  return (
    <woly.Button variant={variants} size={sizes}>
      {text('Text', 'Sign In')}
    </woly.Button>
  );
};
