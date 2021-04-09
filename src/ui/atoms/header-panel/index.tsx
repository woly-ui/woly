import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-rounding — in pixels
 * --woly-font-size
 * --woly-line-height
 * --woly-border-width
 *
 * --woly-background
 * --woly-border
 * --woly-color
 *
 * --woly-background-hover
 * --woly-border-hover
 * --woly-color-hover
 *
 * --woly-background-focus
 * --woly-border-focus
 * --woly-color-focus
 *
 * --woly-background-disabled
 * --woly-border-disabled
 * --woly-color-disabled
 *
 */

const map = (properties: Variant) => ({
  'data-variant': properties.variant || 'default',
});

export const HeaderPanel = styled.div.attrs(map)`
  --woly-width: 100%;

  display: flex;
  align-items: center;

  height: var(--woly-height, 60px);
  width: var(--woly-width);

  padding: var(--woly-padding, 12px);

  background-color: var(--woly-surface, #ffffff);
  border-color: var(--woly-border, #000000);
  border-style: solid;
  border-width: var(--woly-border-width, 0);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-box-shadow, 3px 3px 9px rgba(57, 57, 57, 0.12));
`;
