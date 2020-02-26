import styled from 'styled-components';

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5;
};

const map = (props: TitleProps) => ({
  'data-size': props.level,
});

export const Title = styled.div.attrs(map)<any>`
  &[data-size='1'] {
    font-size: 4.2rem;
  }

  &[data-size='2'] {
    font-size: 3rem;
  }

  line-height: 1.2;
  color: var(--title-color);
`;
