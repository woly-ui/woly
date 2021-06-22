import styled, { StyledComponent, css } from 'styled-components';

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

  & > * {
    padding-top: var(--local-vertical);
    padding-bottom: var(--local-vertical);
  }

  & > :first-child {
    padding-left: var(--local-horizontal);
  }

  & > :last-child {
    padding-right: var(--local-horizontal);
  }

  & > [data-icon]:first-child {
    padding-left: var(--local-compensate);
  }
  & > [data-icon]:last-child {
    padding-right: var(--local-compensate);
  }

  & > :not(:first-child) {
    padding-left: var(--local-gap);
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

export const BoxComponent = styled.div`
  ${box}
` as StyledComponent<'div', Record<string, unknown>>;

export const BoxVerticalComponent = styled.div`
  ${boxVertical}
` as StyledComponent<'div', Record<string, unknown>>;
