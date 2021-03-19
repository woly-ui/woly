import styled from 'styled-components';

export const Global = styled.div`
  --woly-const-m: 6px;
  --woly-main-level: 3;
  --woly-line-height: 24px;

  --woly-primary: #683aef;
  --woly-primary-hover: #ac8fff;
  --woly-primary-focus: #3c218b;
  --woly-primary-disabled: #f4f2f7;

  [data-variant='primary'] {
    --woly-border-width: 2px;

    --woly-background: var(--woly-primary);
    --woly-border: var(--woly-primary);
    --woly-color: #ffffff;
    --woly-count-color: #c4c4c4;

    --woly-background-hover: var(--woly-primary-hover);
    --woly-border-hover: var(--woly-primary-hover);
    --woly-color-hover: #ffffff;

    --woly-background-focus: var(--woly-primary-focus);
    --woly-border-focus: var(--woly-primary-focus);
    --woly-color-focus: #ffffff;

    --woly-background-disabled: var(--woly-primary-disabled);
    --woly-border-disabled: var(--woly-primary-disabled);
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='secondary'] {
    --woly-border-width: 2px;

    --woly-background: #ffffff;
    --woly-border: var(--woly-primary);
    --woly-color: var(--woly-primary);
    --woly-count-color: #c4c4c4;

    --woly-background-hover: #ffffff;
    --woly-border-hover: var(--woly-primary-hover);
    --woly-color-hover: var(--woly-primary-hover);

    --woly-background-focus: #ffffff;
    --woly-border-focus: var(--woly-primary-focus);
    --woly-color-focus: var(--woly-primary-focus);

    --woly-background-disabled: var(--woly-primary-disabled);
    --woly-border-disabled: var(--woly-primary-disabled);
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='base'] {
    --woly-border-width: 1px;
    --woly-rounding: 0;
    --woly-background: #ffffff;
    --woly-border: #a39bb2;
    --woly-color: #000000;
    --woly-count-color: #c4c4c4;

    --woly-border-focus: var(--woly-primary);

    --woly-background-disabled: var(--woly-primary-disabled);
    --woly-border-disabled: var(--woly-primary-disabled);
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='error'] {
    --woly-border-width: 1px;

    --woly-background: #ffffff;
    --woly-border: #eb5656;
    --woly-color: #000000;

    --woly-border-focus: #eb5656;
    --woly-error-text: #eb5656;
    --woly-count-color: #c4c4c4;

    --woly-background-disabled: var(--woly-primary-disabled);
    --woly-border-disabled: var(--woly-primary-disabled);
    --woly-color-disabled: #a39bb2;
  }

  [data-variant='square'] {
    --woly-rounding: 3px;
    --woly-canvas: #f4f2f7;
    --woly-background: var(--woly-primary);
  }

  [data-variant='round'] {
    --woly-rounding: 30px;
    --woly-canvas: #f4f2f7;
    --woly-background: var(--woly-primary);
  }
`;

const Block = styled.div`
  & > * + * {
    --woly-gap: calc(
      (1px * var(--woly-main-level)) +
        (1px * var(--woly-main-level) * var(--woly-component-level))
    );
  }
`;

const N = styled(Block)`
  --woly-component-level: 0;
`;

const XS = styled(Block)`
  --woly-component-level: 1;
`;

const S = styled(Block)`
  --woly-component-level: 2;
`;

const M = styled(Block)`
  --woly-component-level: 3;
`;

const L = styled(Block)`
  --woly-component-level: 4;
`;

const XL = styled(Block)`
  --woly-component-level: 5;
`;

const H = styled(Block)`
  --woly-component-level: 6;
`;

export const block = { N, XS, S, M, L, XL, H };
