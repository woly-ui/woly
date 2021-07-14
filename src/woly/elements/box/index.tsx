import { css } from 'styled-components';

export const box = css`
  --local-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level) - var(--woly-border-width)
  );
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-gap: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-component: calc(var(--woly-const-m) - var(--woly-border-width));
  --local-compensate: calc(var(--local-horizontal) - 1px * var(--woly-main-level));

  & > * {
    padding: var(--local-vertical) var(--local-horizontal);
  }

  & > [data-icon]:only-child {
    padding: var(--local-vertical);
  }

  & > [data-icon]:first-child:not(:only-child) {
    padding-right: 0;
    padding-left: var(--local-compensate);
  }

  & > :not(:first-child) {
    padding-left: var(--local-gap);
  }
  & > [data-icon]:last-child:not(:only-child) {
    padding-right: var(--local-vertical);
    padding-left: 0;
  }
`;

export const boxInline = css`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level) / 2);

  & > * {
    padding-top: var(--local-vertical);
    padding-bottom: var(--local-vertical);
  }
`;

export const boxVertical = css`
  & > *:not(:first-child) {
    padding-top: var(--local-gap);
  }
  & > :only-child {
    padding: 0;
  }
`;
