import * as React from 'react';
import { ButtonIcon } from 'ui';
import { GenerateMap, SizeProps } from 'dev/map-generation';
import { IconSearch } from 'static/icons';

interface ComponentProps {
  name: string;
  values: Array<string | boolean>;
}

interface ButtonIconProps {
  disabled: boolean;
  filled: boolean;
  sizes: SizeProps;
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

export const otherProps = { disabled: [false, true], filled: [false, true] };

export const ComponentButtonIcon = ({ prop }: { prop: ButtonIconProps }) => (
  <ButtonIcon
    icon={<IconSearch />}
    onClick={() => console.info('ButtonIcon clicked')}
    variant={prop.variants}
    disabled={prop.disabled}
    filled={prop.filled}
  />
);

export const GenerateButtonIconMap = () => (
  <GenerateMap
    component={ComponentButtonIcon}
    otherProps={otherProps}
    sizes={sizes}
    variants={variants}
  />
);
