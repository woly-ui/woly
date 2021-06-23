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
  href,
  iconLeft,
  iconAction,
  onClick,
  weight = '2',
  text,
  priority,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={className}
      data-href={href}
      data-weight={weight}
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
};

export const Tab = styled(TabBase)`
  --local-icon-size: var(--woly-line-height);
  --local-tab-max-size: 201px;
  --local-tab-min-size: 67px;

  --local-gradient-color: linear-gradient(
    45deg,
    rgba(var(--woly-shape-default), 0.2),
    var(--woly-shape-default) 100%
  );

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

  [data-link='link-text'] {
    position: relative;

    flex: 1;
    overflow: hidden;

    white-space: nowrap;
    text-align: center;

    &::after {
      position: absolute;
      top: 0;
      right: 0;

      width: 20%;
      height: 100%;

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

  &[data-weight='1'] {
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
  }

  &[data-weight='2'] {
    --local-text-color: var(--woly-shape-default);
    --local-background: var(--woly-shape-disabled);
    --local-border-color: var(--woly-shape-default);

    color: var(--local-text-color);

    background: var(--local-background);
    border-right-color: var(--local-border-color);

    [data-icon='link-icon'] > svg > path {
      fill: var(--local-text-color);
    }

    [data-link='link-text'] {
      &::after {
        --local-gradient-color: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.2),
          var(--woly-shape-disabled) 100%
        );
        background: var(--local-gradient-color);
      }
    }

    &[data-active='true'] {
      --local-background: var(--woly-background);
      --local-text-color: var(--woly-canvas-text-active);

      [data-link='link-text'] {
        --local-background: var(--woly-background);
        &::after {
          --local-gradient-color: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.2),
            var(--woly-background) 100%
          );
        }
      }
    }

    &:hover {
      --local-background: transparent;
      --local-text-color: var(--woly-shape-hover);
      --local-border-color: var(--woly-shape-active);
      [data-link='link-text'] {
        &::after {
          --local-gradient-color: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.2),
            var(--woly-background) 100%
          );
        }
      }

      &:focus-within {
        z-index: 1;

        outline: none;
        box-shadow: 0 var(--woly-border-width) 0 0 var(--woly-focus-color);
        --local-gradient-color: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2),
          var(--woly-background) 100%
        );
      }
    }

    &[data-weight='3'] {
      --local-background: var(--woly-shape-default);
      --local-text-color: var(--woly-shape-text-default);
      --local-border-color: var(--woly-shape-default);

      color: var(--local-text-color);

      background-color: var(--local-background);
      border-right-color: var(--local-border-color);

      [data-link='link-text'] {
        background-color: var(--local-background);

        &::after {
          background: var(--local-gradient-color);
        }
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
    }
  }
` as StyledComponent<'div', Record<string, unknown>, TabProps & TabElementProps & Priority>;
