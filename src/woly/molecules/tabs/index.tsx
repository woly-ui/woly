import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements';
interface TabElementProps {
  iconLeft?: React.ReactNode;
  iconAction?: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  text: React.ReactNode;
}

interface TabProps {
  active?: boolean;
  className?: string;
  href?: string;
  outlined?: boolean;
}

const mapTabs = (properties: Priority) => ({
  'data-priority': properties.priority ?? 'secondary',
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
` as StyledComponent<'div', Record<string, unknown>, Priority>;

const TabBase: React.FC<TabProps & TabElementProps & Priority> = ({
  active,
  className,
  href,
  iconLeft,
  iconAction,
  onClick,
  outlined,
  text,
  priority
}) => (
  <div
    className={className}
    data-href={href}
    data-outlined={outlined}
    onClick={onClick}
    tabIndex={0}
    data-active={active}
    data-priority={priority}
  >
    {iconLeft && <span data-icon="link-icon">{iconLeft}</span>}
    <span data-link="link-text">{text}</span>
    {iconAction && <span data-icon="tab-action">{iconAction}</span>}
  </div>
);

export const Tab = styled(TabBase)`
  --local-icon-color: var(--woly-canvas-text-default);
  --local-background: var(--woly-canvas-disabled);
  --local-color: var(--woly-canvas-text-default);
  --local-icon-size: var(--woly-line-height);
  --local-border-color: var(--woly-shape-default);
  --local-tab-max-size: 201px;
  --local-tab-min-size: 67px;
  --local-gradient-color-default: linear-gradient(to right, rgba(255, 255, 255, 0.2), var(--local-background) 100%);
  --local-gradient-color-hover: linear-gradient(to right,rgba(255, 255, 255, 0.2), var(--woly-background) 100%);
  --local-gradient-color-active: linear-gradient(to right,rgba(255, 255, 255, 0.2), var(--woly-background) 100%);

  ${box}

  display: flex;
  flex: 1;
  align-items: center;

  box-sizing: border-box;
  min-width: var(--local-tab-min-size);
  max-width: var(--local-tab-max-size);

  color: var(--local-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  text-decoration: none;

  background-color: var(--local-background);
  border-right: var(--woly-border-width) solid var(--local-border-color);

  outline: none;

  cursor: pointer;

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

      width: 35%;
      height: 100%;

      background: var(--local-gradient-color);

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
        --local-gradient-color: var(--local-gradient-color-hover);
      }
    }
  }

  &[data-active='true'] {
    z-index: 1;

    box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);

    --local-background: var(--woly-canvas-default);
    [data-link='link-text'] {
      &::after {
        --local-gradient-color: var(--local-gradient-color-active);
      }
    }
  }

  &:focus {
    z-index: 1;

    outline: none;
    box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);
  }
` as StyledComponent<'div', Record<string, unknown>, TabProps & TabElementProps & Priority>;
