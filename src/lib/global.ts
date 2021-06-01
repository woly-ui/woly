import styled from 'styled-components';

export const Global = styled.div`
  * {
    font-family: 'Helvetica Neue', sans-serif;
  }

  --palette-snow-1000: 0, 0%, 0%; /* #000000 */
  --palette-snow-500: 0, 0%, 75%; /* #c0c0c0 */
  --palette-snow-300: 0, 0%, 90%; /* #e5e5e5 */
  --palette-snow-100: 0, 0%, 96%; /* #f5f5f5 */
  --palette-snow-0: 0, 0%, 100%; /* #ffffff */

  --palette-lavender-500: 250, 80%, 73%; /* #9381f1 */
  --palette-lavender-300: 250, 79%, 80%; /* #b0a3f4 */
  --palette-lavender-100: 250, 80%, 86%; /* #c9c0f8 */

  --palette-dawn-300: 356, 100%, 78%; /* #ff9097 */

  /* should be rewritten to formulas */
  --woly-line-height: 24px;
  --woly-border-width: 1.5px;
  --woly-rounding: 3px;
  --woly-font-size: 15px;
  --woly-shadow: 3px 3px 9px hsla(0, 0%, 22%, 12%);

  --woly-const-m: 6px;
  --woly-main-level: 3;

  --woly-background: hsla(var(--palette-snow-0), 100%);
  --woly-neutral: hsla(var(--palette-snow-500), 100%);
  --woly-focus: hsla(var(--palette-lavender-500), 100%);
  --woly-danger: hsla(var(--palette-dawn-300), 100%);

  [data-variant='white-and-black'] {
    --woly-shape-default: var(--woly-base);
    --woly-shape-disabled: hsla(var(--palette-snow-300), 100%);
    --woly-shape-hover: hsla(var(--palette-snow-1000), 50%);
    --woly-shape-active: var(--woly-neutral);

    --woly-shape-text-default: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-disabled: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-hover: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-active: hsla(var(--palette-snow-0), 100%);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--palette-snow-300), 100%);
    --woly-canvas-hover: hsla(var(--palette-snow-500), 10%);
    --woly-canvas-active: transparent;

    --woly-canvas-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-canvas-text-disabled: hsla(var(--palette-snow-300), 100%);
    --woly-canvas-text-hover: hsla(var(--palette-snow-500), 10%);
    --woly-canvas-text-active: hsla(var(--palette-snow-500), 100%);
  }

  [data-variant='primary'] {
    --woly-shape-default: hsla(var(--palette-lavender-300), 100%);
    --woly-shape-disabled: hsla(var(--palette-snow-300), 100%);
    --woly-shape-hover: hsla(var(--palette-lavender-100), 100%);
    --woly-shape-active: hsla(var(--palette-lavender-300), 100%);

    --woly-shape-text-default: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-disabled: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-hover: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-active: hsla(var(--palette-snow-0), 100%);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--palette-snow-100), 100%);
    --woly-canvas-hover: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-active: hsla(var(--palette-snow-500), 100%);

    --woly-canvas-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-canvas-text-disabled: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-text-hover: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-text-active: hsla(var(--palette-snow-500), 100%);
  }

  [data-variant='secondary'] {
    --woly-shape-default: hsla(var(--palette-snow-0), 100%);
    --woly-shape-disabled: hsla(var(--palette-snow-0), 100%);
    --woly-shape-hover: hsla(var(--palette-snow-300), 100%);
    --woly-shape-active: hsla(var(--palette-snow-1000), 5%);

    --woly-shape-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-canvas-text-disabled: hsla(var(--palette-snow-1000), 10%);
    --woly-shape-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-shape-text-default: hsla(var(--palette-snow-1000), 100%);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--palette-snow-100), 100%);
    --woly-canvas-hover: hsla(var(--palette-snow-1000), 5%);
    --woly-canvas-active: hsla(var(--palette-snow-300), 100%);

    --woly-canvas-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-canvas-text-disabled: hsla(var(--palette-snow-1000), 10%);
    --woly-canvas-text-hover: hsla(var(--palette-snow-1000), 100%);
    --woly-canvas-text-active: hsla(var(--palette-snow-1000), 100%);
  }

  [data-variant='tertiary'] {
    --woly-shape-default: hsla(var(--palette-snow-1000), 5%);
    --woly-shape-disabled: hsla(var(--palette-snow-100), 100%);
    --woly-shape-hover: hsla(var(--palette-snow-300), 100%);
    --woly-shape-active: hsla(var(--palette-snow-500), 100%);

    --woly-shape-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-shape-text-disabled: hsla(var(--palette-snow-1000), 10%);
    --woly-shape-text-hover: hsla(var(--palette-snow-1000), 100%);
    --woly-shape-text-active: hsla(var(--palette-snow-1000), 100%);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--palette-snow-100), 100%);
    --woly-canvas-hover: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-active: hsla(var(--palette-snow-500), 100%);

    --woly-canvas-text-default: hsla(var(--palette-snow-1000), 100%);
    --woly-canvas-text-disabled: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-text-hover: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-text-active: hsla(var(--palette-snow-500), 100%);
  }

  [data-variant='danger'] {
    --woly-shape-default: hsla(var(--woly-danger), 100%);
    --woly-shape-disabled: hsla(var(--palette-snow-300), 100%);
    --woly-shape-hover: hsla(var(--woly-danger), 100%);
    --woly-shape-active: hsla(var(--woly-danger), 100%);

    --woly-shape-text-default: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-disabled: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-hover: hsla(var(--palette-snow-0), 100%);
    --woly-shape-text-active: hsla(var(--palette-snow-0), 100%);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--palette-snow-100), 100%);
    --woly-canvas-hover: hsla(var(--woly-danger), 100%);
    --woly-canvas-active: hsla(var(--woly-danger), 100%);

    --woly-canvas-text-default: hsla(var(--woly-danger), 100%);
    --woly-canvas-text-disabled: hsla(var(--palette-snow-500), 100%);
    --woly-canvas-text-hover: hsla(var(--woly-danger), 100%);
    --woly-canvas-text-active: hsla(var(--woly-danger), 100%);
  }
`;
