/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { GenerateMap } from 'dev/map-generation';
import { IconSearch } from 'static/icons';

import { Button } from '.';

interface ComponentProps {
  name: string;
  values: Array<string | boolean>;
}

interface ComponentButtonProps {
  disabled: boolean;
  icon: boolean;
  outlined: boolean;
  sizes: 'N' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'H';
  variants: string;
}

export const variants: ComponentProps = {
  name: 'variants',
  values: ['primary', 'secondary'],
};

export const sizes: ComponentProps = {
  name: 'sizes',
  values: ['N', 'XS', 'S', 'M', 'L', 'XL', 'H'],
};

export const otherProps: Record<string, Array<unknown>> = {
  disabled: [false, true],
  outlined: [false, true],
  icon: [false, true],
};

export const ComponentButton: React.FC<{ prop: ComponentButtonProps }> = ({ prop }) => (
  <Button
    disabled={prop.disabled}
    icon={prop.icon ? <IconSearch /> : null}
    onClick={() => console.log('Hi!')}
    outlined={prop.outlined}
    text="Button"
    variant={prop.variants}
  />
);

export const GenerateButton = () => (
  <GenerateMap
    component={ComponentButton}
    otherProps={otherProps}
    sizes={sizes}
    variants={variants}
  />
);
