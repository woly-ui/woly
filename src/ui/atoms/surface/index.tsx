import styled from 'styled-components';

/**
 * --surface-background
 * --surface-border-width
 * --surface-border-color
 * --surface-box-shadow
 * --padding
 * --rounding
 */

interface SurfaceProps {
  variant?: string;
}

const map = (properties: SurfaceProps) => ({
  'data-variant': properties.variant || 'default',
});

export const Surface = styled.div.attrs(map)`
  padding: var(--padding, 1rem);

  background-color: var(--surface-background, #ffffff);
  border-color: var(--surface-border-color, #000000);
  border-width: var(--surface-border-width, 0);
  border-radius: var(--rounding, 3px);
  box-shadow: var(--surface-box-shadow, none);
`;
