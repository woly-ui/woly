import styled, { StyledComponent } from 'styled-components';

/**
 * --font-size
 * --line-height
 * --padding
 * --color
 * --label-color
 */

interface LabelProps {
  text: React.ReactNode;
  children?: never;
}

const map = (properties: LabelProps) => ({
  children: properties.text,
});

export const Base = styled.span.attrs(map)`
  display: block;
  padding: var(--padding, 1rem);

  color: var(--label-color, #000000);
  font-size: var(--font-size, 1rem);
  line-height: var(--line-height, 1.2rem);
` as StyledComponent<'span', Record<string, unknown>, LabelProps>;

export const Primary = styled(Base)`
  --label-color: var(--color);
`;
