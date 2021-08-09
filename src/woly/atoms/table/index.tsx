import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

const map = (properties: { columns: number } & Priority) => ({
  'data-priority': properties.priority || 'secondary',
  style: { '--local-columns': properties.columns },
});

export const Table = styled.table.attrs(map)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-cell-max-width: 240px;
  --local-gap: calc(var(--woly-const-m) / 2);

  display: grid;
  grid-template-columns: repeat(var(--local-columns), auto);
  gap: var(--local-gap);
` as StyledComponent<'table', Record<string, unknown>, { columns: number } & Priority>;

export const Thead = styled.thead`
  display: contents;
`;

export const Tbody = styled.tbody`
  display: contents;
`;

export const Th = styled.th`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: var(--local-cell-max-width);
  padding: var(--local-vertical) var(--local-horizontal);

  color: var(--woly-canvas-text-disabled);
  font-weight: normal;

  line-height: var(--woly-line-height);

  background: var(--woly-shape-text-default);
`;

export const Td = styled.td`
  display: flex;
  box-sizing: border-box;
  max-width: var(--local-cell-max-width);
  padding: var(--local-vertical) var(--local-horizontal);

  color: var(--woly-canvas-text-default);
  line-height: var(--woly-line-height);

  background: var(--woly-shape-text-default);
`;

export const Tr = styled.tr`
  display: contents;
`;
