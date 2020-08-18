import styled, { StyledComponent } from 'styled-components';

interface LabelProps {
  text: React.ReactNode;
  children?: never;
}

const map = (properties: LabelProps) => ({
  children: properties.text,
});

export const Base = styled.span.attrs(map)`
  font-size: var(--font-size, 1rem);
  line-height: var(--line-height, 1.2rem);
  padding: var(--padding, 1rem);
  color: var(--label-color, #000000);
` as StyledComponent<'span', {}, LabelProps>;

export const Primary = styled(Base)`
  --label-color: var(--color);
`;
