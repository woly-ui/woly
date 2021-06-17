import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

import { box } from '../../elements/box';

interface NavType {
  active?: boolean;
  className: string;
  disabled?: boolean;
  onClick: React.EventHandler<React.SyntheticEvent>;
  path?: string;
  value: React.ReactNode;
}

const map = (properties: Priority) => ({
  'data-priority': properties.priority || 'secondary',
});

const NavigationItemBase: React.FC<NavType & Priority> = ({
  active,
  className,
  disabled,
  onClick,
  path,
  priority,
  value,
}) => {
  const onKeyDown = React.useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event?.preventDefault();
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <li
      className={className}
      data-active={active}
      data-disabled={disabled}
      data-path={path}
      data-priority={priority}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={disabled ? 0 : 1}
    >
      <div data-link>
        <div data-text>{value}</div>
      </div>
      <div data-underline />
    </li>
  );
};

export const NavigationItem = styled(NavigationItemBase)`
  --local-color: var(--woly-canvas-text-default);
  --local-background: var(--woly-canvas-default);
  --local-line-height: 1px;

  * {
    color: var(--local-color);
  }

  [data-link] {
    ${box}

    padding: calc(var(--woly-line-height) / 2) 0;

    [data-text] {
      line-height: var(--woly-line-height);

      border: var(--woly-border-width) solid var(--local-background);
    }
  }

  [data-link]:hover {
    --local-color: var(--woly-shape-hover);
  }

  [data-underline] {
    display: none;
    margin: 0 var(--local-horizontal);

    border: var(--local-line-height) solid var(--woly-shape-default);
    border-radius: 50px;
  }

  &[data-active='true'] {
    --local-color: var(--woly-shape-default);
    [data-underline] {
      display: block;
    }
  }

  &[data-disabled='true'] {
    --local-color: var(--woly-neutral);
    pointer-events: none;
  }

  &:focus {
    border-radius: var(--woly-rounding);
    outline: none;
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }
`;

export const NavigationContainer = styled.ul.attrs(map)`
  --local-padding-lr: calc(
    2px * var(--woly-component-level) * var(--woly-main-level) + var(--woly-line-height)
  );
  --local-background: var(--woly-canvas-default);

  display: flex;
  margin: 0;

  padding: 0 var(--local-padding-lr);

  list-style-type: none;
  background-color: var(----local-background);
` as StyledComponent<'ul', Record<string, unknown>, Priority>;
