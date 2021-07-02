import { css } from 'styled-components';

export const box = css`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-compensate: var(--local-vertical);
  --local-component: var(--woly-const-m);

  & > * {
    padding: var(--local-vertical) var(--local-horizontal);
  }
  & > [data-icon]:first-child:not(:only-child) {
    padding-right: 0;
    padding-left: var(--local-compensate);
  }
  & > [data-icon]:only-child {
    padding: var(--local-vertical);
  }
  & > :not(:first-child) {
    padding-left: var(--local-gap);
  }
  & > [data-icon]:last-child:not(:only-child) {
    padding: 0;
  }
  & > [data-icon]:last-child:not(:only-child) > * {
    padding-top: var(--local-vertical);
    padding-right: var(--local-compensate);
    padding-bottom: var(--local-vertical);
  }
  & > [data-icon]:last-child:not(:only-child) > [data-component] {
    margin: var(--local-component) var(--local-component) var(--local-component) auto;
    padding: 0;
  }
  & > [data-size-none]:last-child:not(:only-child) {
    margin: 0 var(--local-vertical) 0 0;
  }

  & > [data-size-none]:last-child:not(:only-child) > [data-component] {
    margin: 0;
  }
`;

export const boxVertical = css`
  --local-gap: var(--woly-const-m);

  & > *:not(:first-child) {
    padding-top: var(--local-gap);
  }

  & > :only-child {
    padding: 0;
  }
`;
