import styled from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-surface-background
 * --woly-surface-border-width
 * --woly-surface-border-color
 * --woly-surface-box-shadow
 * --woly-padding
 * --woly-rounding
 */

const map = (properties: Variant) => ({
  'data-variant': properties.variant || 'default',
});

export const Surface = styled.div.attrs(map)`
  padding: var(--woly-padding, 1rem);

  background-color: var(--woly-surface-background, #ffffff);
  border-color: var(--woly-surface-border-color, #000000);
  border-width: var(--woly-surface-border-width, 0);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-surface-box-shadow, none);
`;
