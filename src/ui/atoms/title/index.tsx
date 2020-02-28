import styled from 'styled-components';

type TitleProps = {
  level: 1 | 2 | 3;
};

const map = (props: TitleProps) => ({
  'data-size': props.level,
});

export const Title: any = styled.div.attrs(map)`
  &[data-size='1'] {
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
  }

  &[data-size='2'] {
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
  }

  &[data-size='3'] {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
  }

  color: var(--title-color);
`;
