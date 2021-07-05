import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface IconBoxProps {
  className?: string;
  children: React.ReactNode;
  weight?: string;
}

const IconBoxBase: React.FC<IconBoxProps & Priority> = ({
  className,
  children,
  priority = 'secondary',
  weight = 'transparent',
}) => (
  <div className={className} data-weight={weight} data-priority={priority}>
    <span data-icon="icon-component">{children}</span>
  </div>
);

export const IconBox = styled(IconBoxBase)`
  ${box}
  --local-icon-size: var(--woly-line-height);

  display: flex;
  align-items: center;

  box-sizing: border-box;

  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  border-style: solid;

  border-width: var(--woly-border-width);
  border-radius: var(--woly-rounding);
  outline: none;

  [data-icon] {
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

  &[data-weight='fill'] {
    --local-shape-color: var(--woly-shape-default);
    --local-fill-color: var(--woly-shape-text-default);
    --local-border-color: var(--woly-shape-default);

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-icon='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }

  &[data-weight='outline'] {
    --local-shape-color: transparent;
    --local-fill-color: var(--woly-shape-default);
    --local-border-color: var(--woly-shape-default);

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-icon='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }

  &[data-weight='goast'] {
    --local-shape-color: transparent;
    --local-fill-color: var(--woly-base-black);
    --local-border-color: transparent;

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-icon='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }

  &[data-weight='transparent'] {
    --local-shape-color: transparent;
    --local-fill-color: var(--woly-shape-default);
    --local-border-color: transparent;

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-icon='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, IconBoxProps & Priority>;
