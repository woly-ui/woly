import styled from 'styled-components';

export const Global = styled.div`
  * {
    font-family: 'Helvetica Neue', sans-serif;
  }

  --palette-snow-1000: #000000;
  --palette-snow-500: #c0c0c0;
  --palette-snow-300: #e5e5e5;
  --palette-snow-100: #f5f5f5;
  --palette-snow-0: #ffffff;

  --palette-lavender-500: #9381f1;
  --palette-lavender-300: #b0a3f4;
  --palette-lavender-100: #c9c0f8;

  --palette-dawn-300: #ff9097;

  /* should be rewritten to formulas */
  --woly-line-height: 24px;
  --woly-border-width: 1.5px;
  --woly-rounding: 3px;
  --woly-font-size: 15px;
  --woly-shadow: 3px 3px 9px rgba(57, 57, 57, 0.12);

  --woly-const-m: 6px;
  --woly-main-level: 3;

  --woly-neutral: var(--palette-snow-500);
  --woly-focus: var(--palette-lavender-500);
  --woly-background: var(--palette-snow-0);
  --woly-danger: var(--palette-dawn-300);

  [data-variant='primary'] {
    --woly-shape-default: var(--palette-lavender-300);
    --woly-shape-disabled: var(--palette-snow-300);
    --woly-shape-hover: var(--palette-lavender-100);
    --woly-shape-active: var(--palette-lavender-300);

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palette-snow-100);
    --woly-canvas-hover: var(--palette-snow-500);
    --woly-canvas-active: var(--palette-snow-500);

    --woly-canvas-text-default: var(--palette-snow-1000);
    --woly-canvas-text-disabled: var(--palette-snow-500);
    --woly-canvas-text-hover: var(--palette-snow-500);
    --woly-canvas-text-active: var(--palette-snow-500);
  }

  [data-variant='secondary'] {
    --woly-shape-default: var(--palette-snow-500);
    --woly-shape-disabled: var(--palette-snow-100);
    --woly-shape-hover: var(--palette-snow-500);
    --woly-shape-active: var(--palette-snow-500);

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palette-snow-100);
    --woly-canvas-hover: var(--palette-snow-500);
    --woly-canvas-active: var(--palette-snow-500);

    --woly-canvas-text-default: var(--palette-snow-1000);
    --woly-canvas-text-disabled: var(--palette-snow-500);
    --woly-canvas-text-hover: var(--palette-snow-500);
    --woly-canvas-text-active: var(--palette-snow-500);
  }

  [data-variant='danger'] {
    --woly-shape-default: var(--woly-danger);
    --woly-shape-disabled: var(--palette-snow-300);
    --woly-shape-hover: var(--woly-danger);
    --woly-shape-active: var(--woly-danger);

    --woly-shape-text-default: var(--palette-snow-0);
    --woly-shape-text-disabled: var(--palette-snow-0);
    --woly-shape-text-hover: var(--palette-snow-0);
    --woly-shape-text-active: var(--palette-snow-0);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: var(--palette-snow-100);
    --woly-canvas-hover: var(--woly-danger);
    --woly-canvas-active: var(--woly-danger);

    --woly-canvas-text-default: var(--woly-danger);
    --woly-canvas-text-disabled: var(--palette-snow-500);
    --woly-canvas-text-hover: var(--woly-danger);
    --woly-canvas-text-active: var(--woly-danger);
  }
`;
