import styled, { StyledComponent } from 'styled-components';

interface Props {
  /* eslint-disable-next-line no-magic-numbers */
  airiness: 1 | 2 | 3; // | 4 | 5 | 6 | 7;
}

const map = (properties: Props) => ({
  'data-airiness': properties.airiness,
});

export const Scope = styled.div.attrs(map)`
  &[data-airiness='1'] {
    --rounding: 0px;
    --font-size: 0.4rem;
    --line-height: 0.6rem;
    --spacing-vertical: 0.1rem;
    --spacing-horizontal: 0.2rem;
  }

  &[data-airiness='2'] {
    --rounding: 4px;
    --font-size: 1rem;
    --line-height: 1.5rem;
    --spacing-vertical: 0.5rem;
    --spacing-horizontal: 1rem;
  }

  &[data-airiness='3'] {
    --rounding: 8px;
    --font-size: 1.4rem;
    --line-height: 1.8rem;
    --spacing-vertical: 1rem;
    --spacing-horizontal: 2rem;
  }
` as StyledComponent<'div', any, Props>;
