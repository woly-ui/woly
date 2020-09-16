import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --menu-list-padding
 * --menu-list-color
 * --menu-list-background
 * --rounding
 * --shadow
 * --menu-list-item-padding
 * --menu-list-hover
 */

interface MenuList {
  menu: Array<{ item: React.ReactNode; id: string }>;
}

const MenuList: React.FC<MenuList & { className: string }> = ({
  menu,
  className,
}) => (
  <ul className={className}>
    {menu.map(({ item, id }) => (
      <li key={id} data-type="menu-item">
        {item}
      </li>
    ))}
  </ul>
);

export const Base = styled(MenuList)`
  padding: var(--menu-list-padding, 6px 0);

  color: var(--menu-list-color, #1a1a23);

  list-style-type: none;

  background-color: var(--menu-list-background, #ffffff);
  border-radius: var(--rounding, 3px);
  box-shadow: var(--shadow, 0 0 8px 0 #efefef);

  li[data-type='menu-item'] {
    padding: var(--menu-list-item-padding, 8px 18px);

    &:hover,
    &:focus {
      background-color: var(--menu-list-hover, #f8f8fa);
      cursor: pointer;
    }
  }
` as StyledComponent<'ul', Record<string, unknown>, MenuList>;
