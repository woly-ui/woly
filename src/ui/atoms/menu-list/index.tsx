import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-menu-list-padding
 * --woly-menu-list-color
 * --woly-menu-list-background
 * --woly-rounding
 * --woly-shadow
 * --woly-canvas
 * --woly-background-hover
 * --woly-color
 * --woly-color-hover
 */

interface MenuList {
  className?: string;
  menu: Array<{ item: React.ReactNode; id: string }>;
}

const MenuListBase: React.FC<MenuList & Variant> = ({
  className,
  menu,
  variant = 'default',
}) => (
  <ul className={className} data-variant={variant}>
    {menu.map(({ item, id }) => (
      <li key={id} data-type="menu-item">
        {item}
      </li>
    ))}
  </ul>
);

export const MenuList = styled(MenuListBase)`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );

  padding: var(--woly-menu-list-padding, 3px 0);

  color: var(--woly-color, #1a1a23);

  list-style-type: none;

  background-color: var(--woly-canvas, #ffffff);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-shadow, 0 0 8px 0 #efefef);

  li[data-type='menu-item'] {
    padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--woly-color-hover, #1a1a23);

      background-color: var(--woly-background-hover, #f8f8fa);
    }
  }
` as StyledComponent<'ul', Record<string, unknown>, MenuList & Variant>;
