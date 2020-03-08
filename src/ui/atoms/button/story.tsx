import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import * as woly from '../../..';
import { ButtonVariants, ButtonSizes } from '.';

export default { title: 'Atoms' };

type Mapped<T extends string> = Record<T, T>;

export const Button = () => {
  const content = text('Text', 'Sign In');
  const variants: ButtonVariants[] = [
    'default',
    'primary',
    'destructive',
    'text',
  ];
  const sizes: ButtonSizes[] = ['default', 'small'];

  return (
    <table>
      <tr key="heading-key">
        <td style={{ fontSize: '1.6rem' }}>variant\size</td>
        {sizes.map((size) => (
          <td key={size} style={{ fontSize: '1.6rem' }}>
            {size}
          </td>
        ))}
      </tr>
      {variants.map((variant) => (
        <tr key={variant}>
          <td style={{ fontSize: '1.6rem' }}>{variant}</td>
          {sizes.map((size) => (
            <td key={size}>
              <woly.Button
                key={variant + size}
                variant={variant}
                size={size}
                text={content}
              />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
