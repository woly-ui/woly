import * as React from 'react';

import type { CellProps, DataTableProps, HeadGroupProps, HeadProps } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '../../atoms/table';

export type { DataTableColumn, HeadProps as DataTableHeadProps } from './types';

// TODO: solve the ref forwarding problem [31-08-2021]
export function DataTable<TValue, TRowKey extends string>({
  rowKey,
  columns,
  placeholder = '----',
  priority = 'secondary',
  values,
  ...rest
}: DataTableProps<TValue, TRowKey>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Table columns={columns.length} priority={priority} {...rest}>
      <TableHeadGroup columns={columns} />
      <Tbody>
        {values.map((row) => (
          <Tr key={row[rowKey]}>
            {columns.map((column) => {
              const Cell = column.cell || DefaultCell;

              return (
                <Td key={column.property}>
                  <Cell
                    value={row[column.property]}
                    placeholder={column.placeholder || placeholder}
                  />
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

function DefaultCell<T>({ value, placeholder }: CellProps<T>) {
  return <>{value || placeholder}</>;
}

function DefaultHead({ title }: HeadProps) {
  return <>{title}</>;
}

function TableHeadGroup<T>({ columns }: HeadGroupProps<T>) {
  return (
    <Thead>
      <Tr>
        {columns.map(({ title, property, head }) => {
          const Head = head || DefaultHead;
          const padding = isReactEntity(title) ? '0' : '';

          return (
            <Th key={property} style={{ padding }}>
              <Head title={title} />
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
}

const isReactComponent = (value: unknown) => typeof value === 'function';
const isReactElement = (value: unknown) => typeof value === 'object';
const isReactEntity = (value: unknown) => isReactComponent(value) || isReactElement(value);
