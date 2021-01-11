import styled from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-border-width
 * --woly-box-shadow
 * --woly-padding
 * --woly-rounding
 *
 * --woly-surface
 * --woly-border
 *
 */

const map = (properties: Variant) => ({
  'data-variant': properties.variant || 'default',
});

export const Surface = styled.div.attrs(map)`
  padding: var(--woly-padding, 1rem);

  background-color: var(--woly-surface, #ffffff);
  border-color: var(--woly-border, #000000);
  border-style: solid;
  border-width: var(--woly-border-width, 0);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-box-shadow, none);
`;
