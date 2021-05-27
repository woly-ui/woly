import * as React from 'react';
import { Priority } from 'lib/types';

import { Table, Tbody, Td, Th, Thead, Tr } from '../../atoms/table';

type CellType<T> = {
  id: string;
} & Record<string, T>;

interface CellProps<T> {
  placeholder?: string;
  value: T;
}

interface ColumnProps<T> {
  cell?: React.FC<CellProps<T>>;
  property: string;
  title: React.ReactNode | string;
}

interface DataTableProps<T> {
  className: string;
  columns: Array<ColumnProps<T>>;
  placeholder?: string;
  values: Array<CellType<T>>;
}

interface TableHeadProps<T> {
  head: Array<ColumnProps<T>>;
}

export function DataTable<T>({
  className,
  columns,
  placeholder = '----',
  priority = 'secondary',
  values,
}: DataTableProps<T> & Priority) {
  return (
    <Table columns={columns.length} priority={priority} className={className}>
      <TableHead head={columns} />
      <Tbody>
        {values.map(({ id, ...row }) => (
          <Tr key={id}>
            {columns.map(({ property, cell }) => {
              const Cell = cell || DefaultCell;
              return (
                <Td key={property}>
                  <Cell value={row[property]} placeholder={placeholder} />
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

function TableHead<T>({ head }: TableHeadProps<T>) {
  return (
    <Thead>
      <Tr>
        {head.map(({ property, title }) => {
          const paddingStyle = isComponent(title) && '0';
          return (
            <Th key={property} style={{ padding: `${paddingStyle}` }}>
              {title}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
}

const isComponent = (title: unknown) => typeof title === 'object';
