import { css } from 'styled-components';

const MAX_DOWNGRADE = 6;

export const levelDowngradeCss = css`
  [data-woly-component-level-downgrade-wrapper] {
    ${range(1, MAX_DOWNGRADE + 1)
      .map(tempVarSet)
      .join('\n')}
  }

  ${range(1, MAX_DOWNGRADE + 1)
    .map(tempVarUse)
    .join('\n')}

  [data-woly-component-level-downgrade-wrapper] > [data-woly-component-level-downgrade-wrapper] {
    background-color: red;
  }

  [data-woly-component-level-downgrade-wrapper]
    > [data-woly-component-level-downgrade-wrapper]::after {
    content: "don't pass data-woly-component-level-downgrade-wrapper directly in another data-woly-component-level-downgrade-wrapper";
  }
`;

export const levelDowngrade = {
  wrapperProps: () => ({
    'data-woly-component-level-downgrade-wrapper': true,
  }),
  props: ({ diff } = { diff: 1 }) => ({
    'data-woly-component-level-downgrade': diff,
  }),
};

function tempVarSet(num: number) {
  return `--woly-component-level-temp-${num}: max(calc(var(--woly-component-level) - ${num}), 0);`;
}

function tempVarUse(num: number) {
  return `
    [data-woly-component-level-downgrade-wrapper] > [data-woly-component-level-downgrade='${num}'] {
      --woly-component-level: var(--woly-component-level-temp-${num});
    }
  `;
}

function range(start: number, end: number) {
  return [...new Array(end).keys()].slice(start);
}
