import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { forwardRef } from 'react';

type BaseIconBoxProps = React.HTMLProps<HTMLDivElement> & Priority;

export type IconBoxProps = BaseIconBoxProps & {
  children: React.ReactNode;
  weight?: string;
};

const IconBoxBase = forwardRef<HTMLDivElement, IconBoxProps>(
  ({ children, priority = 'secondary', weight = 'transparent', ...rest }, iconBoxRef) => (
    <div ref={iconBoxRef} data-weight={weight} data-priority={priority} {...rest}>
      <span data-element="icon-component" data-box-role="icon">
        {children}
      </span>
    </div>
  ),
);

export const IconBox = styled(IconBoxBase)<IconBoxProps>`
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

  [data-element='icon-component'] {
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

    [data-element='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }

  &[data-weight='outline'] {
    --local-shape-color: transparent;
    --local-fill-color: var(--woly-shape-default);
    --local-border-color: var(--woly-shape-default);

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }

  &[data-weight='goast'] {
    --local-shape-color: transparent;
    --local-fill-color: var(--woly-base-black);
    --local-border-color: transparent;

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }

  &[data-weight='transparent'] {
    --local-shape-color: transparent;
    --local-fill-color: var(--woly-shape-default);
    --local-border-color: transparent;

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon-component'] > svg > path {
      fill: var(--local-fill-color);
    }
  }
`;
