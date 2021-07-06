import { css } from 'styled-components';

interface PriorityType {
  bwPaletteName: string;
  paletteName?: string;
  priorityName: string;
  weight: 'fill' | 'outline';
}

export const createPriority = ({
  bwPaletteName,
  paletteName,
  priorityName,
  weight,
}: PriorityType) => {
  const palette = paletteName || bwPaletteName;

  const colors: Record<string, string> = {
    'shape-default': 'transparent',
    'shape-disabled': `hsla(var(--${palette}-200), 1)`,
    'shape-hover': 'transparent',
    'shape-active': 'transparent',

    'shape-text-default': `hsla(var(--${bwPaletteName}-0), 1)`,
    'shape-text-disabled': `hsla(var(--${palette}-300), 1)`,
    'shape-text-hover': `hsla(var(--${bwPaletteName}-600), 1)`,
    'shape-text-active': `hsla(var(--${bwPaletteName}-700), 1)`,

    'canvas-default': `transparent`,
    'canvas-disabled': `hsla(var(--${bwPaletteName}-200), 1)`,
    'canvas-hover': `transparent`,
    'canvas-active': `transparent`,

    'canvas-text-default': `hsla(var(--${bwPaletteName}-0), 1);`,
    'canvas-text-disabled': `hsla(var(--${bwPaletteName}-300), 1);`,
    'canvas-text-hover': `hsla(var(--${palette}-600), 1);`,
    'canvas-text-active': `hsla(var(--${palette}-700), 1);`,
  };

  if (weight === 'fill') {
    colors['shape-default'] = `hsla(var(--${palette}-500), 1)`;
    colors['shape-disabled'] = `hsla(var(--${palette}-200), 1)`;
    colors['shape-hover'] = `hsla(var(--${palette}-600), 1)`;
    colors['shape-active'] = `hsla(var(--${palette}-700), 1)`;

    colors['shape-text-default'] = `hsla(var(--${bwPaletteName}-1000), 1)`;
    colors['shape-text-hover'] = `hsla(var(--${bwPaletteName}-1000), 1)`;
    colors['shape-text-active'] = `hsla(var(--${bwPaletteName}-1000), 1)`;

    colors['canvas-hover'] = `hsla(var(--${palette}-600), 1)`;
    colors['canvas-active'] = `hsla(var(--${palette}-700), 1)`;
    colors['canvas-text-hover'] = `hsla(var(--${bwPaletteName}-0), 1)`;
    colors['canvas-text-active'] = `hsla(var(--${bwPaletteName}-0), 1)`;
  }

  const priorityPalette = Object.keys(colors).map((key) => `--woly-${key}: ${colors[key]};`);

  return css`
    [data-priority='${priorityName}'] {
      ${priorityPalette.join('\n')}
    }
  `;
};
