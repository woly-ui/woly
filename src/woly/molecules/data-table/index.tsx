import * as React from 'react';
import { Priority } from 'lib/types';

import { Table, Tbody, Td, Th, Thead, Tr } from '../../atoms/table';

type CellType<T> = {
  id: string;
} & Record<string, T>;

interface HeadProps {
  title: React.ReactNode | string;
}

interface CellProps<T> {
  placeholder?: React.ReactNode | string;
  value: T;
}

interface ColumnProps<T> {
  title: React.ReactNode | string;
  property: string;
  head?: React.FC<HeadProps>;
  cell?: React.FC<CellProps<T>>;
  placeholder?: React.ReactNode | string;
}

interface DataTableProps<T> {
  className: string;
  columns: Array<ColumnProps<T>>;
  placeholder?: React.ReactNode | string;
  values: Array<CellType<T>>;
}

interface HeadGroupProps<T> {
  columns: Array<ColumnProps<T>>;
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
      <TableHeadGroup columns={columns} />
      <Tbody>
        {values.map(({ id, ...row }) => (
          <Tr key={id}>
            {columns.map((column) => {
              const Cell = column.cell || DefaultCell;
              const finalPlaceholder = column.placeholder || placeholder;

              return (
                <Td key={column.property}>
                  <Cell value={row[column.property]} placeholder={finalPlaceholder} />
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
