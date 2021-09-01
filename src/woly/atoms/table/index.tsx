import React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';

type BaseTableProps = React.TableHTMLAttributes<HTMLTableElement> & Priority;

export type TableProps = BaseTableProps & {
  columns: number;
};

const map = ({ style = {}, columns, priority }: TableProps) => ({
  'data-priority': priority || 'secondary',
  style: {
    ...style,
    '--local-columns': columns,
  } as React.CSSProperties,
});

export const Table = styled.table.attrs(map)<TableProps>`
  --local-gap: calc(var(--woly-const-m) / 2);
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
  --local-cell-max-width: 240px;

  display: grid;
  grid-template-columns: repeat(var(--local-columns), auto);
  gap: var(--local-gap);
`;

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
  /* TODO: Replace with box [09.08.2020] */
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
