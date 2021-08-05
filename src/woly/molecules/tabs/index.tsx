import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
interface TabElementProps {
  iconLeft?: React.ReactNode;
  iconAction?: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  text: React.ReactNode;
}

interface TabProps {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  path?: string;
  weight?: string;
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
  disabled = false,
  iconAction,
  iconLeft,
  onClick,
  path,
  priority,
  text,
  weight = 'outline',
}) => (
  <div
    className={className}
    data-active={active}
    data-disabled={disabled}
    data-path={path}
    data-priority={priority}
    data-weight={weight}
    onClick={onClick}
    tabIndex={0}
  >
    {iconLeft && <span data-icon="link-icon">{iconLeft}</span>}
    <span data-element="link-text">{text}</span>
    {iconAction && <span data-icon="tab-action">{iconAction}</span>}
  </div>
);

export const Tab = styled(TabBase)`
  --local-icon-size: var(--woly-line-height);
  --local-tab-max-size: 201px;
  --local-tab-min-size: 67px;

  ${box}

  display: flex;
  flex: 1;
  align-items: center;

  box-sizing: border-box;
  min-width: var(--local-tab-min-size);
  max-width: var(--local-tab-max-size);

  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  text-decoration: none;

  border-right-width: var(--woly-border-width);
  border-right-style: solid;

  outline: none;

  cursor: pointer;

  [data-element='link-text'] {
    position: relative;

    flex: 1;
    overflow: hidden;

    white-space: nowrap;
    text-align: center;
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
    }
  }

  &[data-active='true'] {
    z-index: 1;

    box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);

    &:hover,
    &:focus-within {
      background: var(--woly-background);
    }
  }

  &[data-weight='transparent'] {
    --local-text-color: var(--woly-canvas-text-default);
    color: var(--local-text-color);

    background: transparent;
    border-right-color: transparent;

    &:hover {
      --local-text-color: var(--woly-shape-hover);
    }

    &:focus-within {
      --local-text-color: var(--woly-shape-active);
      box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);
    }

    &[data-active='true'] {
      --local-text-color: var(--woly-focus-color);
    }

    &[data-disabled='true'] {
      --local-text-color: var(--woly-canvas-text-disabled);
      pointer-events: none;
    }
  }

  &[data-weight='outline'] {
    --local-text-color: var(--woly-shape-default);
    --local-background: var(--woly-shape-disabled);
    --local-border-color: var(--woly-shape-default);

    color: var(--local-text-color);

    background: var(--local-background);
    border-right-color: var(--local-border-color);

    [data-icon='link-icon'] > svg > path {
      fill: var(--local-text-color);
    }

    &[data-active='true'] {
      --local-background: var(--woly-background);
      --local-text-color: var(--woly-canvas-text-active);

      [data-element='link-text'] {
        --local-background: var(--woly-background);
      }
    }

    &[data-disabled='true'] {
      --local-text-color: var(--woly-canvas-text-disabled);
      --local-background: var(--woly-shape-disabled);
      --local-border-color: var(--woly-shape-disabled);
      pointer-events: none;
    }
  }

  &:hover {
    --local-background: transparent;
    --local-text-color: var(--woly-shape-hover);
    --local-border-color: var(--woly-shape-active);
  }

  &:focus-within {
    z-index: 1;

    outline: none;
    box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);
  }

  &[data-weight='fill'] {
    --local-background: var(--woly-shape-default);
    --local-text-color: var(--woly-shape-text-default);
    --local-border-color: var(--woly-shape-default);

    color: var(--local-text-color);

    background-color: var(--local-background);
    border-right-color: var(--local-border-color);

    [data-link='link-text'] {
      background-color: var(--local-background);
    }

    [data-icon='link-icon'] > svg > path {
      fill: var(--local-text-color);
    }

    &:hover {
      --local-background: var(--woly-shape-hover);
    }

    &:focus-within {
      z-index: 1;

      outline: none;
      box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);
    }

    &[data-active='true'] {
      --local-text-color: var(--woly-canvas-text-active);
      --local-background: var(--woly-background);
    }

    &[data-disabled='true'] {
      --local-text-color: var(--woly-canvas-text-disabled);
      --local-background: var(--woly-shape-disabled);
      --local-border-color: var(--woly-shape-disabled);
      pointer-events: none;
    }
  }
` as StyledComponent<'div', Record<string, unknown>, TabProps & TabElementProps & Priority>;
