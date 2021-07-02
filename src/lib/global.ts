import styled from 'styled-components';

export const Global = styled.div`
  * {
    font-family: 'Helvetica Neue', sans-serif;
  }

  /* base colors */
  --bw-0: 0, 0%, 0%;
  --bw-1000: 0, 0%, 100%;

  /* bw palette */
  --bw-100: 249, 7%, 81%;
  --bw-200: 240, 7%, 92%;
  --bw-300: 240, 9%, 98%;
  --bw-400: 245, 6%, 66%;
  --bw-500: 247, 7%, 48%;
  --bw-600: 248, 7%, 40%;
  --bw-700: 251, 7%, 30%;
  --bw-800: 249, 7%, 21%;
  --bw-900: 240, 7%, 11%;

  /* primary palette */
  --primary-100: 257, 78%, 98%;
  --primary-200: 256, 83%, 93%;
  --primary-300: 255, 85%, 84%;
  --primary-400: 256, 84%, 72%;
  --primary-500: 255, 85%, 58%;
  --primary-600: 255, 61%, 49%;
  --primary-700: 255, 61%, 37%;
  --primary-800: 255, 60%, 25%;
  --primary-900: 256, 61%, 13%;

  /* secondary palette */
  --secondary-100: 223, 100%, 13%;
  --secondary-200: 223, 100%, 22%;
  --secondary-300: 223, 100%, 30%;
  --secondary-400: 223, 100%, 40%;
  --secondary-500: 223, 100%, 46%;
  --secondary-600: 223, 100%, 58%;
  --secondary-700: 223, 100%, 64%;
  --secondary-800: 223, 100%, 78%;
  --secondary-900: 223, 100%, 93%;

  /* danger palette */
  --danger-100: 345, 73%, 96%;
  --danger-200: 344, 72%, 87%;
  --danger-300: 345, 72%, 74%;
  --danger-400: 345, 72%, 57%;
  --danger-500: 345, 100%, 42%;
  --danger-600: 345, 99%, 33%;
  --danger-700: 345, 98%, 25%;
  --danger-800: 345, 98%, 16%;
  --danger-900: 346, 95%, 8%;

  /* accent palette */
  --accent-100: 0, 100%, 98%;
  --accent-200: 358, 95%, 92%;
  --accent-300: 358, 97%, 85%;
  --accent-400: 358, 97%, 76%;
  --accent-500: 359, 96%, 67%;
  --accent-600: 359, 53%, 53%;
  --accent-700: 358, 47%, 39%;
  --accent-800: 359, 47%, 25%;
  --accent-900: 0, 46%, 11%;

  /* success palette */
  --success-100: 120, 38%, 97%;
  --success-200: 124, 40%, 92%;
  --success-300: 125, 38%, 82%;
  --success-400: 124, 39%, 73%;
  --success-500: 124, 39%, 63%;
  --success-600: 124, 23%, 50%;
  --success-700: 124, 23%, 36%;
  --success-800: 124, 23%, 24%;
  --success-900: 124, 23%, 12%;

  /* should be rewritten to formulas */
  --woly-main-level: 3;
  --woly-const-m: 6px;

  --woly-border-width: 1.5px;
  --woly-rounding: 3px;

  --woly-line-height: calc(24px - 2 * var(--woly-border-width));
  --woly-font-size: 15px;

  --woly-background: hsla(var(--bw-1000), 1);
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

  [data-priority='tertiary'] {
    --woly-shape-default: transparent;
    --woly-shape-disabled: hsla(var(--bw-200), 1);
    --woly-shape-hover: transparent;
    --woly-shape-active: transparent;

    --woly-shape-text-default: hsla(var(--bw-0), 1);
    --woly-shape-text-disabled: hsla(var(--bw-300), 1);
    --woly-shape-text-hover: hsla(var(--bw-600), 1);
    --woly-shape-text-active: hsla(var(--bw-700), 1);

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
