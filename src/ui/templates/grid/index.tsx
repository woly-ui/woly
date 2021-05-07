import styled, { StyledComponent } from 'styled-components';

interface GridProps {
  columns?: number;
}

interface ColumnProps {
  size?: number;
}

const map = (properties: GridProps) => ({
  style: { '--local-columns': properties.columns },
});

const columnMap = (properties: ColumnProps) => ({
  style: { '--local-size': properties.size },
});

export const Grid = styled.div.attrs(map)`
  display: grid;
  grid-template-columns: repeat(var(--local-columns), 1fr);
  width: 100%;
` as StyledComponent<'div', Record<string, unknown>, GridProps>;

export const Column = styled.div.attrs(columnMap)`
  grid-column: var(--local-size) span;
` as StyledComponent<'div', Record<string, unknown>, ColumnProps>;
