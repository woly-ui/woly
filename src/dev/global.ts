import styled from 'styled-components';
import { WolyGlobalStyles } from 'ui/woly-global-styles';
import { createPalette } from 'lib/palette';
import { createPriority } from 'lib/priority';

import { systemUi } from './font-stacks';

export const Global = styled(WolyGlobalStyles)`
  ${systemUi}

  * {
    font-family: 'Helvetica Neue', var(--font-system-ui);
  }

  /* base colors */
  --bw-0: 0, 0%, 100%;
  --bw-1000: 0, 0%, 0%;

  /* bw palette */
  ${createPalette('247, 7%, 48%', 'bw')}

  /* primary palette */
  ${createPalette('255, 85%, 58%', 'primary')}

  /* secondary palette */
  ${createPalette('223, 100%, 46%', 'secondary')}

  /* danger palette */
  ${createPalette('345, 100%, 42%', 'danger')}

  /* accent palette */
  ${createPalette('359, 96%, 67%', 'accent')}

  /* success palette */
  ${createPalette('124, 39%, 63%', 'success')}

  /* should be rewritten to formulas */
  --woly-main-level: 3;
  --woly-const-m: 6px;

  --woly-border-width: 1.5px;
  --woly-rounding: 3px;

  --woly-line-height: 24px;
  --woly-font-size: 15px;

  --woly-background: hsla(var(--bw-1000), 1);
  --woly-base-black: hsla(var(--bw-0), 1);
  --woly-neutral: hsla(var(--bw-500), 1);
  --woly-focus-color: hsla(var(--primary-700), 1);
  --woly-danger-color: hsla(var(--danger-500), 1);

  --woly-backdrop: hsla(var(--bw-0), 0.3);
  --woly-shadow: 3px 3px 9px hsla(0, 0%, 22%, 12%);

  [data-priority='white'] {
    --woly-shape-default: hsla(var(--bw-0), 1);
    --woly-shape-disabled: hsla(var(--bw-200), 1);
    --woly-shape-hover: hsla(var(--bw-400), 1);
    --woly-shape-active: hsla(var(--bw-600), 1);

    --woly-shape-text-default: hsla(var(--bw-1000), 1);
    --woly-shape-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-1000), 1);
    --woly-shape-text-active: hsla(var(--bw-1000), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--bw-200), 1);
    --woly-canvas-hover: transparent;
    --woly-canvas-active: transparent;

    --woly-canvas-text-default: hsla(var(--bw-1000), 1);
    --woly-canvas-text-disabled: hsla(var(--bw-300), 1);
    --woly-canvas-text-hover: hsla(var(--bw-600), 1);
    --woly-canvas-text-active: hsla(var(--bw-700), 1);
  }

  ${createPriority({
    priorityName: 'default',
    paletteName: 'bw',
    bwPaletteName: 'bw',
  })}

  ${createPriority({
    priorityName: 'primary',
    paletteName: 'primary',
    bwPaletteName: 'bw',
  })}

  ${createPriority({
    priorityName: 'secondary',
    paletteName: 'secondary',
    bwPaletteName: 'bw',
  })}

  ${createPriority({
    priorityName: 'danger',
    paletteName: 'danger',
    bwPaletteName: 'bw',
  })}

  ${createPriority({
    priorityName: 'success',
    paletteName: 'success',
    bwPaletteName: 'bw',
  })}
`;
