import * as React from 'react';

import { text, boolean, select } from '@storybook/addon-knobs';

import {
  Button as WolyButton,
  Input as WolyInput,
  Block as WolyBlock,
  Form as WolyForm,
  Title as WolyTitle,
} from '../src';

import { ButtonTypes, ButtonSizes } from '../src/ui/atoms/button';

export default { title: 'Atoms' };

type ButtonTypesProps = {
  [key: string]: ButtonTypes;
};

type ButtonSizesProps = {
  [key: string]: ButtonSizes;
};

const ButtonTypes: ButtonTypesProps = {
  primary: 'primary',
  warning: 'warning',
  link: 'link',
};

const ButtonSizes: ButtonSizesProps = {
  normal: 'normal',
  small: 'small',
};

export const Button = () => {
  const types = select('Type', ButtonTypes, 'primary');
  const sizes = select('Size', ButtonSizes, 'normal');

  return (
    <WolyButton type={types} size={sizes} ghost={boolean('Ghost', false)}>
      {text('Text', 'Sign In')}
    </WolyButton>
  );
};

export const Input = () => {
  return <WolyInput placeholder="name" value={text('Text', 'display name')} />;
};

export const Password = () => {
  return <WolyInput type="password" value={text('Text', 'display name')} />;
};

export const Title = () => {
  const levels = select('Level', [1, 2, 3], 1);
  return (
    <WolyTitle as="h1" level={levels}>
      H{levels} Title
    </WolyTitle>
  );
};

export const Form = () => {
  return (
    <WolyBlock>
      <WolyForm handleSubmit={() => alert('Send!')}>
        <WolyInput placeholder="email" value={text('Text', 'display name')} />
        <WolyButton>Sign In</WolyButton>
      </WolyForm>
    </WolyBlock>
  );
};
