import * as React from 'react';
import { Priority } from 'lib';

export type CellType<TValue, TRowKey extends string> = {
  [key in TRowKey]: string;
} &
  Record<string, TValue>;

export interface HeadProps {
  title: React.ReactNode | string;
}

export interface CellProps<TValue> {
  placeholder?: React.ReactNode | string;
  value: TValue;
}

export interface DataColumn<TValue> {
  title: React.ReactNode | string;
  property: string;
  head?: React.FC<HeadProps>;
  cell?: React.FC<CellProps<TValue>>;
  placeholder?: React.ReactNode | string;
}

export type DataTableProps<
  TValue,
  TRowKey extends string
> = React.HTMLAttributes<HTMLTableElement> &
  Priority & {
    rowKey: string;
    columns: Array<DataColumn<TValue>>;
    placeholder?: React.ReactNode | string;
    values: Array<CellType<TValue, TRowKey>>;
  };

export interface HeadGroupProps<TValue> {
  columns: Array<DataColumn<TValue>>;
}
