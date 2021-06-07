import styled from 'styled-components';

export const Global = styled.div`
  * {
    font-family: 'Helvetica Neue', sans-serif;
  }

  /* base colors */
  --base-black-0: 0, 0%, 0%;
  --base-grey-50: 247, 7%, 48%;
  --base-white-100: 0, 0%, 100%;
  --base-danger-color: 356, 100%, 78%;

  /* grey palette */
  --grey-lighter-1: 249, 7%, 81%;
  --grey-lighter-2: 240, 7%, 92%;
  --grey-lighter-3: 240, 9%, 98%;
  --grey-lighter-4: 245, 6%, 66%;

  --grey-darker-6: 248, 7%, 40%;
  --grey-darker-7: 251, 7%, 30%;
  --grey-darker-8: 249, 7%, 21%;
  --grey-darker-9: 240, 7%, 11%;

  /* brand palette */
  --brand-color-base-5: 255, 85%, 58%;

  --brand-color-lighter-1: 257, 78%, 98%;
  --brand-color-lighter-2: 256, 83%, 93%;
  --brand-color-lighter-3: 255, 85%, 84%;
  --brand-color-lighter-4: 256, 84%, 72%;

  --brand-color-darker-6: 255, 61%, 49%;
  --brand-color-darker-7: 255, 61%, 37%;
  --brand-color-darker-8: 255, 60%, 25%;
  --brand-color-darker-9: 256, 61%, 13%;

  /* should be rewritten to formulas */
  --woly-main-level: 3;
  --woly-const-m: 6px;

  --woly-border-width: 1.5px;
  --woly-rounding: 3px;

  --woly-line-height: 24px;
  --woly-font-size: 15px;

  --woly-background: hsla(var(--base-white-100), 1);
  --woly-neutral: hsla(var(--base-grey-50), 1);
  --woly-focus-color: hsla(var(--brand-color-darker-7), 1);
  --woly-danger-color: hsla(var(--base-danger-color), 1);

  --woly-shadow: 3px 3px 9px hsla(0, 0%, 22%, 12%);

  [data-variant='default'] {
    --woly-shape-default: hsla(var(--base-black-0), 1);
    --woly-shape-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-shape-hover: hsla(var(--grey-darker-7), 1);
    --woly-shape-active: hsla(var(--grey-darker-6), 1);

    --woly-shape-text-default: hsla(var(--base-white-100), 1);
    --woly-shape-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-shape-text-hover: hsla(var(--base-white-100), 1);
    --woly-shape-text-active: hsla(var(--base-white-100), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-canvas-hover: hsla(var(--grey-darker-7), 1);
    --woly-canvas-active: hsla(var(--grey-darker-6), 1);

    --woly-canvas-text-default: hsla(var(--base-black-0), 1);
    --woly-canvas-text-disabled: hsla(var(--grey-lighter-3), 0.5);
    --woly-canvas-text-hover: hsla(var(--base-black-0), 1);
    --woly-canvas-text-active: hsla(var(--base-black-0), 1);
  }

  [data-variant='primary'] {
    --woly-shape-default: hsla(var(--brand-color-base-5), 1);
    --woly-shape-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-shape-hover: hsla(var(--brand-color-darker-6), 1);
    --woly-shape-active: hsla(var(--brand-color-darker-7), 1);

    --woly-shape-text-default: hsla(var(--base-white-100), 1);
    --woly-shape-text-disabled: hsla(var(--base-white-100), 1);
    --woly-shape-text-hover: hsla(var(--base-white-100), 1);
    --woly-shape-text-active: hsla(var(--base-white-100), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-canvas-hover: hsla(var(--brand-color-darker-6), 1);
    --woly-canvas-active: hsla(var(--brand-color-darker-7), 1);

    --woly-canvas-text-default: hsla(var(--base-black-0), 1);
    --woly-canvas-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-canvas-text-hover: hsla(var(--base-black-0), 1);
    --woly-canvas-text-active: hsla(var(--base-black-0), 1);
  }

  [data-variant='secondary'] {
    --woly-shape-default: hsla(var(--base-grey-50), 1);
    --woly-shape-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-shape-hover: hsla(var(--grey-darker-7), 1);
    --woly-shape-active: hsla(var(--grey-darker-8), 1);

    --woly-shape-text-default: hsla(var(--base-white-100), 1);
    --woly-canvas-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-shape-text-hover: hsla(var(--base-white-100), 1);
    --woly-shape-text-active: hsla(var(--base-white-100), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-canvas-hover: hsla(var(--grey-darker-7), 1);
    --woly-canvas-active: hsla(var(--grey-darker-8), 1);

    --woly-canvas-text-default: hsla(var(--base-black-0), 1);
    --woly-canvas-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-canvas-text-hover: hsla(var(--base-black-0), 1);
    --woly-canvas-text-active: hsla(var(--base-black-0), 1);
  }

  [data-variant='tertiary'] {
    --woly-shape-default: transparent;
    --woly-shape-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-shape-hover: transparent;
    --woly-shape-active: transparent;

    --woly-shape-text-default: hsla(var(--base-black-0), 1);
    --woly-shape-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-shape-text-hover: hsla(var(--grey-darker-7), 1);
    --woly-shape-text-active: hsla(var(--grey-darker-6), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-canvas-hover: transparent;
    --woly-canvas-active: transparent;

    --woly-canvas-text-default: hsla(var(--base-black-0), 1);
    --woly-canvas-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-canvas-text-hover: hsla(var(--grey-darker-7), 1);
    --woly-canvas-text-active: hsla(var(--grey-darker-6), 1);
  }

  [data-variant='danger'] {
    --woly-shape-default: hsla(var(--base-danger-color), 1);
    --woly-shape-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-shape-hover: hsla(var(--base-danger-color), 1);
    --woly-shape-active: hsla(var(--base-danger-color), 1);

    --woly-shape-text-default: hsla(var(--base-white-100), 1);
    --woly-shape-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-shape-text-hover: hsla(var(--base-white-100), 1);
    --woly-shape-text-active: hsla(var(--base-white-100), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--grey-lighter-2), 1);
    --woly-canvas-hover: hsla(var(--base-danger-color), 1);
    --woly-canvas-active: hsla(var(--base-danger-color), 1);

    --woly-canvas-text-default: hsla(var(--base-danger-color), 1);
    --woly-canvas-text-disabled: hsla(var(--grey-lighter-3), 1);
    --woly-canvas-text-hover: hsla(var(--base-danger-color), 1);
    --woly-canvas-text-active: hsla(var(--base-danger-color), 1);
  }
`;
