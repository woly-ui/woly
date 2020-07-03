import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

export type ButtonVariants = 'default' | 'primary' | 'destructive' | 'text';
export type ButtonSizes = 'default' | 'small';

/**
 * --rounding — in pixels
 * --font-size
 * --line-height
 * --spacing-vertical
 * --spacing-horizontal
 *
 * --primary-bg — color of the background
 * --primary-text — color of the text
 *
 * --secondary-bg
 * --secondary-text
 *
 * --destructive-bg
 * --destructive-text
 */

interface Props {
  text: React.ReactNode;
  children?: never;
}

const map = (properties: Props) => ({
  children: properties.text,
});

export const Base = styled.button.attrs(map)`
  border-radius: var(--rounding, 4px);
  font-size: var(--font-size, 1rem);
  line-height: var(--line-height, 1.4rem);
  padding: var(--spacing-vertical, 1rem) var(--spacing-horizontal, 0.4rem);

  border: 1px solid var(--button-borders, #000000);
  background-color: var(--button-background, #000000);
  color: var(--button-color, #ffffff);

  &:hover,
  &:focus,
  &:active {
    border-color: var(--button-borders, #000000);
    outline: none;
  }
` as StyledComponent<'button', {}, Props>;

export const Primary = styled(Base)`
  --button-borders: var(--primary-bg);
  --button-background: var(--primary-bg);
  --button-color: var(--primary-text);
`;

export const Secondary = styled(Base)`
  --button-borders: var(--secondary-bg);
  --button-background: var(--secondary-bg);
  --button-color: var(--secondary-text);
`;

export const Destructive = styled(Base)`
  --button-borders: var(--destructive-bg);
  --button-background: var(--destructive-bg);
  --button-color: var(--destructive-text);
`;
