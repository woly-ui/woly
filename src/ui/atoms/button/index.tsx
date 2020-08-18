/* eslint-disable react/button-has-type */
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
  left?: React.ReactNode;
  right?: React.ReactNode;
  children?: never;
  type?: 'button' | 'submit' | 'reset';
}

const Button = (p: Props & { className?: string }) => (
  <button className={p.className} type={p.type || 'button'} {...p}>
    {p.left && <span data-icon="left">{p.left}</span>}
    <span>{p.text}</span>
    {p.right && <span data-icon="right">{p.right}</span>}
  </button>
);

export const Base = styled(Button)`
  --vertical: calc(1px * var(--component-level) * var(--main-level));
  --horizontal: calc(
    var(--const-m) + (1px * var(--main-level)) + var(--vertical)
  );
  --line-height: 24px;
  --gap: calc(
    (1px * var(--main-level)) +
      (1px * var(--main-level) * var(--component-level))
  );

  display: flex;
  flex-wrap: nowrap;
  border-radius: var(--rounding, 4px);
  font-size: var(--font-size, 15px);
  line-height: var(--line-height, 24px);
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  /* border: 1px solid var(--button-borders, #000000); */
  border: none;
  background-color: var(--button-background, #000000);
  color: var(--button-color, #ffffff);

  &:hover,
  &:focus,
  &:active {
    border-color: var(--button-borders, #000000);
    outline: none;
  }

  & [data-icon] {
    width: var(--line-height, 24px);
    height: var(--line-height, 24px);
  }

  & > *:not(:first-child) {
    margin-left: var(--gap);
  }
` as StyledComponent<'button', Record<string, unknown>, Props>;

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
