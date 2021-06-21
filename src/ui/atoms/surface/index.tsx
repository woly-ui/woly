import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

const map = (properties: Variant) => ({
  'data-variant': properties.variant || 'secondary',
});

export const Surface = styled.div.attrs(map)`
  background-color: var(--woly-shape-text-default);
  border-radius: var(--woly-rounding);
  box-shadow: var(--woly-shadow-perfect);
` as StyledComponent<'div', Record<string, unknown>, Variant>;
