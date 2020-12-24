import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-menu-list-padding
 * --woly-menu-list-color
 * --woly-menu-list-background
 * --woly-rounding
 * --woly-shadow
 * --woly-menu-list-item-padding
 * --woly-menu-list-hover
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
  padding: var(--woly-menu-list-padding, 6px 0);

  color: var(--woly-menu-list-color, #1a1a23);

  list-style-type: none;

  background-color: var(--woly-menu-list-background, #ffffff);
  border-radius: var(--woly-rounding, 3px);
  box-shadow: var(--woly-shadow, 0 0 8px 0 #efefef);

  li[data-type='menu-item'] {
    padding: var(--woly-menu-list-item-padding, 8px 18px);

    &:hover,
    &:focus {
      background-color: var(--woly-menu-list-hover, #f8f8fa);
      cursor: pointer;
    }
  }
` as StyledComponent<'ul', Record<string, unknown>, MenuList & Variant>;
