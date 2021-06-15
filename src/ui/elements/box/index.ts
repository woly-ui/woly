import { css } from 'styled-components';

export const box = css`
  --local-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level) - var(--woly-border-width)
  );
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical) -
      var(--woly-border-width)
  );
  --local-gap: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-compensate: var(--local-vertical);
  --local-component: calc(var(--woly-const-m) - var(--woly-border-width));

  & > * {
    padding-top: var(--local-vertical);
    padding-bottom: var(--local-vertical);
    padding-left: var(--local-horizontal);
  }

  & > [data-text]:last-child {
    padding-right: var(--local-horizontal);
  }

  & > [data-icon]:first-child {
    padding-left: var(--local-compensate);
  }

  & > :not(:first-child) {
    padding-left: var(--local-gap);
  }

  & > [data-icon]:last-child {
    padding-top: 0;
    padding-bottom: 0;
  }

  & > [data-icon]:last-child > * {
    padding-top: var(--local-vertical);
    padding-right: var(--local-compensate);
    padding-bottom: var(--local-vertical);
  }

  & > [data-icon]:last-child > [data-component] {
    margin: var(--local-component) var(--local-component) var(--local-component) auto;
    padding: 0;
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
