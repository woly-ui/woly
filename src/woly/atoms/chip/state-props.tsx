import * as React from 'react';
import { ButtonIcon, Chip } from 'ui';
import { GenerateMap, SizeBlock, SizeProps } from 'lib/map-generation';
import { IconSearch } from 'static/icons';

interface ChipProps {
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

export const ComponentChip = ({ prop }: { prop: ChipProps }) => (
  <SizeBlock size={prop.sizes}>
    <Chip
      variant={prop.variants}
      disabled={prop.disabled}
      leftIcon={prop.leftIcon ? <IconSearch /> : null}
      rightIcon={
        prop.rightIcon ? (
          <ButtonIcon
            icon={<IconSearch />}
            onClick={() => console.info('IconClose clicked')}
            variant={prop.variants}
            disabled={prop.disabled}
            filled
          />
        ) : null
      }
      onClick={() => console.log('Hi!')}
      text="Chip"
    />
  </SizeBlock>
);

export const GenerateChipMap = () => (
  <GenerateMap
    component={ComponentChip}
    otherProps={otherProps}
    sizes={sizes}
    variants={variants}
  />
);
