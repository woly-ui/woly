import { css } from 'styled-components';

/**
 *
 * @param color : hsl => "255, 85%, 58%"";
 */

export const getHsl = (color: string) => {
  const colors = color.replace(' ', '').split(',');
  const hue = Number.parseInt(colors[0], 10);
  const saturation = Number.parseFloat(colors[1]);
  const lightness = Number.parseFloat(colors[2]);
  return { hue, saturation, lightness };
};

const lightnessFn = (number: number, saturation: number) => saturation + 50 - 0.1 * number;

const saturationFn = (number: number, saturation: number) => {
  /** for black and white palette => saturation doesn't change */
  if (saturation < 30 || number === 500) return saturation;
  if (number > 500) return saturation - 30;
  return saturation - 10;
};

const COLOR_NUMBERS = [100, 200, 300, 400, 500, 600, 700, 800];

export const createPalette = (color: string, name: string) => {
  const hsl = getHsl(color);

  const palette = COLOR_NUMBERS.map((number) => {
    const saturation = saturationFn(number, hsl.saturation);
    const lightness = lightnessFn(number, hsl.lightness);

    return `--${name}-${number}: ${hsl.hue}, ${saturation}%, ${lightness}%;`;
  });

  return css`
    ${palette}
  `;
};
