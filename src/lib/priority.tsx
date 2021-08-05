import { css } from 'styled-components';

interface PriorityType {
  bwPaletteName: string;
  paletteName: string;
  priorityName: string;
  weight: 'fill' | 'transparent';
}

export const createPriority = ({
  bwPaletteName,
  paletteName,
  priorityName,
  weight,
}: PriorityType) => {
  const colors: Record<string, string> = {
    'shape-default': `hsla(var(--${bwPaletteName}-0), 1)`,
    'shape-disabled': `hsla(var(--${paletteName}-200), 1)`,
    'shape-hover': `hsla(var(--${bwPaletteName}-400), 1)`,
    'shape-active': `hsla(var(--${bwPaletteName}-600), 1)`,

    'shape-text-default': `hsla(var(--${bwPaletteName}-1000), 1)`,
    'shape-text-disabled': `hsla(var(--${paletteName}-300), 1)`,
    'shape-text-hover': `hsla(var(--${bwPaletteName}-1000), 1)`,
    'shape-text-active': `hsla(var(--${bwPaletteName}-1000), 1)`,

    'canvas-default': `transparent`,
    'canvas-disabled': `hsla(var(--${bwPaletteName}-200), 1)`,
    'canvas-hover': `transparent`,
    'canvas-active': `transparent`,

    'canvas-text-default': `hsla(var(--${bwPaletteName}-1000), 1);`,
    'canvas-text-disabled': `hsla(var(--${bwPaletteName}-300), 1);`,
    'canvas-text-hover': `hsla(var(--${paletteName}-600), 1);`,
    'canvas-text-active': `hsla(var(--${paletteName}-700), 1);`,
  };

  if (weight === 'fill') {
    colors['shape-default'] = `hsla(var(--${paletteName}-500), 1)`;
    colors['shape-disabled'] = `hsla(var(--${paletteName}-200), 1)`;
    colors['shape-hover'] = `hsla(var(--${paletteName}-600), 1)`;
    colors['shape-active'] = `hsla(var(--${paletteName}-700), 1)`;

    colors['shape-text-default'] = `hsla(var(--${bwPaletteName}-0), 1)`;
    colors['shape-text-hover'] = `hsla(var(--${bwPaletteName}-0), 1)`;
    colors['shape-text-active'] = `hsla(var(--${bwPaletteName}-0), 1)`;

    colors['canvas-hover'] = `hsla(var(--${paletteName}-600), 1)`;
    colors['canvas-active'] = `hsla(var(--${paletteName}-700), 1)`;

    colors['canvas-text-hover'] = `hsla(var(--${bwPaletteName}-1000), 1)`;
    colors['canvas-text-active'] = `hsla(var(--${bwPaletteName}-1000), 1)`;
  }

  const priorityPalette = Object.keys(colors).map((key) => `--woly-${key}: ${colors[key]};`);

  return css`
    [data-priority='${priorityName}'] {
      ${priorityPalette.join('\n')}
    }
  `;
};
