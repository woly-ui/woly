import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib';

interface BlockElements {
  iconLeft: React.ReactNode;
  iconRight: React.ReactNode;
  text: React.ReactNode;
}

export const Elements: React.FC<BlockElements & Variant> = ({ iconLeft, iconRight, text }) => (
  <>
    {iconLeft && <span data-icon="left">{iconLeft}</span>}
    <span data-text>{text}</span>
    {iconRight && <span data-icon="right">{iconRight}</span>}
  </>
);

export const Box = styled.div`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: var(--local-vertical);
  --local-compensate: var(--woly-const-m);

  padding: var(--local-vertical) 0;
  display: flex;

  [data-icon='left'] {
    padding: 0 var(--local-gap) 0 calc(var(--local-horizontal) - var(--local-compensate));
  }

  [data-icon='right'] {
    padding: 0 calc(var(--local-horizontal) - var(--local-compensate)) 0 var(--local-gap);
  }

  [data-text] {
    flex: 1;
    padding: 0 var(--local-horizontal);
    text-align: left;

    &:not(:only-child, :last-child) {
      padding-right: 0;
    }
    &:not(:only-child, :first-child) {
      padding-left: 0;
    }
  }

  [data-icon] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
` as StyledComponent<'div', Record<string, unknown>, BlockElements & Variant>;
