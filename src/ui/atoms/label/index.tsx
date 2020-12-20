import styled, { StyledComponent } from 'styled-components';

/**
 * --font-size
 * --line-height
 * --padding
 * --color
 * --label-color
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: React.ReactNode;
  children?: never;
  variant?: string;
}

const map = (properties: LabelProps) => ({
  children: properties.text,
  'data-variant': properties.variant || 'default',
});

export const Label = styled.span.attrs(map)`
  display: block;
  padding: var(--padding, 1rem);

  color: var(--label-color, #000000);
  font-size: var(--font-size, 1rem);
  line-height: var(--line-height, 1.2rem);
` as StyledComponent<'span', Record<string, unknown>, LabelProps>;
