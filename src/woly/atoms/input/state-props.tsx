import * as React from 'react';
import { GenerateMap, SizeBlock, SizeProps } from 'dev/map-generation';
import { IconSearch } from 'static/icons';

import { Input } from '.';

interface InputProps {
  disabled: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
  sizes: SizeProps;
  variants: string;
}

interface ComponentProps {
  name: string;
  values: Array<string | boolean>;
}

export const variants: ComponentProps = {
  name: 'variants',
  values: ['primary', 'secondary'],
};

export const sizes: ComponentProps = {
  name: 'sizes',
  values: ['N', 'XS', 'S', 'M', 'L', 'XL', 'H'],
};

export const otherProps = {
  disabled: [false, true],
  leftIcon: [false, true],
  rightIcon: [false, true],
};

export const ComponentInput = ({ prop }: { prop: InputProps }) => (
  <SizeBlock size={prop.sizes} style={{ minWidth: '200px' }}>
    <Input
      variant={prop.variants}
      disabled={prop.disabled}
      leftIcon={prop.leftIcon ? <IconSearch /> : null}
      rightIcon={prop.rightIcon ? <IconSearch /> : null}
      type="text"
      value="Hello!"
      name="input"
      onChange={() => console.log('Hi!')}
    />
  </SizeBlock>
);

export const GenerateInputMap = () => (
  <GenerateMap
    component={ComponentInput}
    otherProps={otherProps}
    sizes={sizes}
    variants={variants}
  />
);
