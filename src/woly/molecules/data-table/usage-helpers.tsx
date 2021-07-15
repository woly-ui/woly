import * as React from 'react';

import { Filter } from './filter';
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-hooks/rules-of-hooks */
import { HeadProps } from './types';

interface RangeProps {
  value: {
    from: number;
    to: number;
  };
  placeholder: string;
}

export const RangeCell: React.FC<RangeProps> = ({ value, placeholder }) => (
  <span>
    from {value.from || placeholder} to {value.to || placeholder}
  </span>
);

export const bankNames = [
  {
    value: 'vtb',
    name: 'ВТБ',
  },
  {
    value: 'tinkoff',
    name: 'Тинькофф',
  },
  {
    value: 'alfa',
    name: 'Альфа',
  },
  {
    value: 'otkrytie',
    name: 'Открытие',
  },
];

export const paymentSystems = [
  {
    value: 'visa-mastercard',
    name: 'Visa/Mastercard',
  },
  {
    value: 'mir',
    name: 'МИР',
  },
];

export const columns = [
  {
    title: 'ID Дебет',
    property: 'id-debet',
  },
  {
    title: 'ID Кредит',
    property: 'id-credit',
  },
  {
    title: 'Название банка',
    property: 'bank-name',
    head: ({ title }: HeadProps) => (
      <Filter value={[]} onChange={() => {}} options={bankNames} title={title} />
    ),
  },
  {
    title: 'Платежная система',
    property: 'payment-system',
    head: ({ title }: HeadProps) => (
      <Filter value={[]} onChange={() => {}} options={paymentSystems} title={title} />
    ),
  },
  {
    title: 'Диапазон',
    property: 'range',
    cell: RangeCell,
  },
];

export const values = [
  {
    id: 1,
    'id-debet': 798172,
    'id-credit': null,
    'bank-name': 'ВТБ',
    'payment-system': 'Visa/Mastercard',
    range: {
      from: 1,
      to: 4,
    },
  },
  {
    id: 2,
    'id-debet': 798173,
    'id-credit': null,
    'bank-name': 'Альфа-банк',
    'payment-system': 'Visa/Mastercard',
    range: {
      from: 4,
      to: 6,
    },
  },
  {
    id: 3,
    'id-debet': 798174,
    'id-credit': null,
    'bank-name': 'ВТБ',
    'payment-system': 'МИР',
    range: {
      from: 4,
      to: 6,
    },
  },
  {
    id: 4,
    'id-debet': 798175,
    'id-credit': null,
    'bank-name': 'Тинькофф',
    'payment-system': 'Visa/Mastercard',
    range: {
      from: 3,
      to: 6,
    },
  },
  {
    id: 5,
    'id-debet': 798176,
    'id-credit': null,
    'bank-name': 'Открытие',
    'payment-system': 'МИР',
    range: {
      from: 4,
      to: 6,
    },
  },
  {
    id: 6,
    'id-debet': 798177,
    'id-credit': null,
    'bank-name': 'Альфа-банк',
    'payment-system': 'МИР',
    range: {
      from: 4,
      to: 9,
    },
  },
];
