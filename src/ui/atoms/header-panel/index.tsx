import styled from 'styled-components';
import { Variant } from 'lib/types';

const map = (properties: Variant) => ({
  'data-variant': properties.variant || 'default',
});

export const HeaderPanel = styled.div.attrs(map)`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: var(--woly-padding, 12px);

  background-color: var(--woly-canvas, #ffffff);
  border-color: var(--woly-border, #000000);
  border-style: solid;
  border-width: var(--woly-border-width, 0);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-box-shadow, 3px 3px 9px rgba(57, 57, 57, 0.12));
`;
