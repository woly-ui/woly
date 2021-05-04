import styled from 'styled-components';
import { Variant } from 'lib/types';

const map = (properties: { columns: number } & Variant) => ({
  'data-variant': properties.variant || 'secondary',
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
  gap: var(--local-gap);
  grid-template-columns: repeat(var(--local-columns), auto);
`;

export const Thead = styled.thead`
  display: contents;
`;

export const Tbody = styled.tbody`
  display: contents;
`;

export const Th = styled.th`
  padding: var(--local-vertical) var(--local-horizontal);
  max-width: var(--local-cell-max-width);
  box-sizing: border-box;
  background: var(--woly-shape-text-default);
  color: var(--woly-canvas-text-disabled);
`;

export const Td = styled.td`
  padding: var(--local-vertical) var(--local-horizontal);
  max-width: var(--local-cell-max-width);
  box-sizing: border-box;
  background: var(--woly-shape-text-default);
  color: var(--woly-canvas-text-default);
`;

export const Tr = styled.tr`
  display: contents;
`;
