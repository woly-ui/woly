import styled, { css } from 'styled-components';

const fontFaces = css`
  @font-face {
    font-family: system-stack-emoji;
    unicode-range: U+1F300-1F5FF, U+1F600-1F64F, U+1F680-1F6FF, U+2600-26FF;
    /* Edge fix */
    src: local('Segoe UI Emoji'); /* Windows 8.1+ */
    /* prettier-ignore */
    src:
    /* MacOS, iOS */
    local("Apple Color Emoji"),
    /* Windows 8.1+ */
    local("Segoe UI Emoji"),
    /* Android */
    local("Noto Color Emoji")
    local("Android Emoji"),
    /* Linux */
    local("Emoji One Color"),
    local("Twitter Color Emoji"),
    local("EmojiSymbols"),
    local("Symbola");
  }

  @font-face {
    font-weight: 300;
    font-family: system-stack-sans-serif;
    font-style: normal;
    /* prettier-ignore */
    src:
  /* MacOS, iOS */
    local(".SFNSText-Light"),                   /* El Capitan */
    local(".HelveticaNeueDeskInterface-Light"), /* Yosemite */
    local(".LucidaGrandeUI"),                   /* Mavericks */
    /* Windows */
    local("Segoe UI Light"),  /* Since Vista */
    local("Tahoma"),          /* Until XP */
    /* Android */
    local("Roboto-Light"), /* Since 4.0 */
    local("Droid Sans"),   /* Until 3.2 */
    /* Linux */
    local("Ubuntu Light"), /* Ubuntu */
    local("Oxygen"),       /* KDE */
    local("Cantarell"); /* Gnome */
  }

  /* prettier-ignore */
  --system-ui:
    /* Always render emoji first */
    system-stack-emoji,
    /* CSS Fonts Level 4 generic */
    system-ui,
    /* Safari (MacOS 10.11+, iOS 9+)
    */ -apple-system-body,
    /* Chrome until 55, Opera until 42 (MacOS) */
    BlinkMacSystemFont,
    /* Fallback to local fonts */
    system-stack-sans-serif,
    /* In case all else fails */
    sans-serif;
`;

import { createPalette } from './palette';

export const Global = styled.div`
  ${fontFaces}

  * {
    font-family: 'Helvetica Neue', var(--system-ui);
  }

  /* font-weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;

  /* base colors */
  --bw-0: 0, 0%, 0%;
  --bw-1000: 0, 0%, 100%;

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

  --woly-shadow: 3px 3px 9px hsla(0, 0%, 22%, 12%);

  [data-priority='default'] {
    --woly-shape-default: hsla(var(--bw-500), 1);
    --woly-shape-disabled: hsla(var(--bw-200), 1);
    --woly-shape-hover: hsla(var(--bw-600), 1);
    --woly-shape-active: hsla(var(--bw-700), 1);

    --woly-shape-text-default: hsla(var(--bw-1000), 1);
    --woly-shape-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-1000), 1);
    --woly-shape-text-active: hsla(var(--bw-1000), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--bw-200), 1);
    --woly-canvas-hover: hsla(var(--bw-600), 1);
    --woly-canvas-active: hsla(var(--bw-700), 1);

    --woly-canvas-text-default: hsla(var(--bw-0), 1);
    --woly-canvas-text-disabled: hsla(var(--bw-300), 1);
    --woly-canvas-text-hover: hsla(var(--bw-0), 1);
    --woly-canvas-text-active: hsla(var(--bw-0), 1);
  }

  [data-priority='primary'] {
    --woly-shape-default: hsla(var(--primary-500), 1);
    --woly-shape-disabled: hsla(var(--primary-200), 1);
    --woly-shape-hover: hsla(var(--primary-600), 1);
    --woly-shape-active: hsla(var(--primary-700), 1);

    --woly-shape-text-default: hsla(var(--bw-1000), 1);
    --woly-shape-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-1000), 1);
    --woly-shape-text-active: hsla(var(--bw-1000), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--bw-200), 1);
    --woly-canvas-hover: hsla(var(--primary-600), 1);
    --woly-canvas-active: hsla(var(--primary-700), 1);

    --woly-canvas-text-default: hsla(var(--bw-0), 1);
    --woly-canvas-text-disabled: hsla(var(--bw-300), 1);
    --woly-canvas-text-hover: hsla(var(--bw-0), 1);
    --woly-canvas-text-active: hsla(var(--bw-0), 1);
  }

  [data-priority='secondary'] {
    --woly-shape-default: hsla(var(--secondary-500), 1);
    --woly-shape-disabled: hsla(var(--secondary-200), 1);
    --woly-shape-hover: hsla(var(--secondary-600), 1);
    --woly-shape-active: hsla(var(--secondary-700), 1);

    --woly-shape-text-default: hsla(var(--bw-1000), 1);
    --woly-canvas-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-1000), 1);
    --woly-shape-text-active: hsla(var(--bw-1000), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--bw-200), 1);
    --woly-canvas-hover: hsla(var(--secondary-600), 1);
    --woly-canvas-active: hsla(var(--secondary-700), 1);

    --woly-canvas-text-default: hsla(var(--bw-0), 1);
    --woly-canvas-text-disabled: hsla(var(--bw-300), 1);
    --woly-canvas-text-hover: hsla(var(--bw-0), 1);
    --woly-canvas-text-active: hsla(var(--bw-0), 1);
  }

  [data-priority='goast'] {
    --woly-shape-default: transparent;
    --woly-shape-disabled: hsla(var(--bw-200), 1);
    --woly-shape-hover: transparent;
    --woly-shape-active: transparent;

    --woly-shape-text-default: hsla(var(--bw-1000), 1);
    --woly-shape-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-400), 1);
    --woly-shape-text-active: hsla(var(--bw-500), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--bw-200), 1);
    --woly-canvas-hover: transparent;
    --woly-canvas-active: transparent;

    --woly-canvas-text-default: hsla(var(--bw-0), 1);
    --woly-canvas-text-disabled: hsla(var(--bw-300), 1);
    --woly-canvas-text-hover: hsla(var(--bw-600), 1);
    --woly-canvas-text-active: hsla(var(--bw-700), 1);
  }

  [data-priority='danger'] {
    --woly-shape-default: hsla(var(--danger-500), 1);
    --woly-shape-disabled: hsla(var(--danger-200), 1);
    --woly-shape-hover: hsla(var(--danger-600), 1);
    --woly-shape-active: hsla(var(--danger-700), 1);

    --woly-shape-text-default: hsla(var(--bw-1000), 1);
    --woly-shape-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-1000), 1);
    --woly-shape-text-active: hsla(var(--bw-1000), 1);

    --woly-canvas-default: transparent;
    --woly-canvas-disabled: hsla(var(--danger-200), 1);
    --woly-canvas-hover: hsla(var(--danger-600), 1);
    --woly-canvas-active: hsla(var(--danger-700), 1);

    --woly-canvas-text-default: hsla(var(--danger-500), 1);
    --woly-canvas-text-disabled: hsla(var(--danger-300), 1);
    --woly-canvas-text-hover: hsla(var(--danger-600), 1);
    --woly-canvas-text-active: hsla(var(--danger-700), 1);
  }
`;
