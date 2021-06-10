import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';
interface TabElementProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
}

interface TabProps {
  href?: string;
  active?: boolean;
}

interface TabsProps {
  outlined?: boolean;
}

const mapTab = (properties: TabProps & Variant) => ({
  'data-active': properties.active ?? false,
  'data-variant': properties.variant ?? 'secondary',
});

const mapTabs = (properties: TabsProps & Variant) => ({
  'data-outlined': properties.outlined ?? false,
  'data-variant': properties.variant ?? 'secondary',
});

export const Tabs = styled.div.attrs(mapTabs)`
  --local-border-color: var(--woly-shape-default);

  display: flex;
  align-items: center;

  width: 100%;

  margin: 0;
  padding: 0;

  background-color: var(--woly-shape-text-default);

  border-top: var(--woly-border-width) solid var(--local-border-color);
  border-bottom: var(--woly-border-width) solid var(--local-border-color);
` as StyledComponent<'div', Record<string, unknown>, Variant>;

const TabBase: React.FC<TabsProps & TabProps & TabElementProps & Variant> = ({
  active,
  href,
  iconLeft,
  iconRight,
  onClick,
  outlined,
  text,
  variant,
}) => (
  <div
    data-href={href}
    data-outlined={outlined}
    onClick={onClick}
    tabIndex={0}
    data-active={active}
    data-variant={variant}
  >
    <div data-content="tab-content">
      {iconLeft && <span data-icon="link-icon">{iconLeft}</span>}
      <span data-link="link-text">{text}</span>
      {iconRight && <span data-icon="tab-action">{iconRight}</span>}
    </div>
  </div>
);

export const Tab = styled(TabBase)`
--local-icon-color: var(--woly-canvas-text-default);
--local-background: var(--woly-canvas-disabled);
--local-color: var(--woly-canvas-text-default);
--local-icon-size: var(--woly-line-height);
--local-border-color: var(--woly-shape-default);
--local-tab-size: 201px;

box-sizing: border-box;


color: var(--local-color);
font-size: var(--woly-font-size);
line-height: var(--woly-line-height);

text-decoration: none;

background-color: var(--local-background);
border-right: var(--woly-border-width) solid var(--local-border-color);

cursor: pointer;

[data-content='tab-content'] {
  ${box}

  position: relative;

  width: var(--local-tab-size);

  display: flex;
  align-items: center;
}

[data-link='link-text'] {
  position: relative;

  flex: 1;
  overflow: hidden;

  white-space: nowrap;

  background-color: var(--local-background);

  &::after {
    position: absolute;
    top: 0;
    right: 0;

    width: 45%;
    height: 100%;

    background: linear-gradient(to right, rgba(255, 255, 255, 0.2), var(--local-background) 100%);

    content: '';
  }
}

[data-icon] {
  --woly-component-level: 0;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: var(--local-icon-size);
  height: var(--local-icon-size);

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: var(--local-icon-color);
    }
  }
}

&[data-outlined='true'] {
  color: var(--local-shape-color);

  background-color: transparent;

  [data-icon] > svg {
    path {
      fill: var(--local-shape-color);
    }
  }
}

&:hover {
  --local-background: var(--woly-canvas-default);
  [data-link='link-text'] {
    --local-background: var(--woly-canvas-default);

    &::after {
      background: linear-gradient(to right, rgba(255, 255, 255, 0.2), #ffffff 100%);
    }
  }
}

&[data-active='true'] {
  border-bottom: var(--woly-border-width) solid var(--woly-focus);
  --local-background: var(--woly-canvas-default);
}

&:focus {
  --local-backgound: var(--woly-focus);
  z-index: 1;

  outline: none;
  box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
}
` as StyledComponent<'div', Record<string, unknown>, TabsProps & TabProps & TabElementProps & Variant>;

