import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-font-size
 * --woly-label-color
 * --woly-line-height
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: React.ReactNode;
  children?: never;
}

const map = (properties: LabelProps & Variant) => ({
  children: properties.text,
  'data-variant': properties.variant || 'default',
});

export const Label = styled.span.attrs(map)`
  display: block;

  color: var(--woly-color, #000000);
  font-size: var(--woly-font-size, 1rem);
  line-height: var(--woly-line-height, 1.2rem);
` as StyledComponent<'span', Record<string, unknown>, LabelProps & Variant>;
