import * as React from 'react';
import styled from 'styled-components';
import { Label } from 'ui/atoms';
import { Priority } from 'lib/types';
import { boxVertical } from 'ui/elements/box';
import { forwardRef } from 'react';

type BaseFieldProps = React.LabelHTMLAttributes<HTMLLabelElement> & Priority;

export type FieldProps = BaseFieldProps & {
  id?: string;
  row?: boolean;
  label?: React.ReactNode;
};

const FieldBase = forwardRef<HTMLLabelElement, FieldProps>(
  ({ children, label, priority = 'secondary', row = false, ...rest }, labelRef) => (
    <Label ref={labelRef} data-row={row} data-priority={priority} data-element="label" {...rest}>
      <span>{label}</span>
      <div data-element="content">{children}</div>
    </Label>
  ),
);

export const Field = styled(FieldBase)<FieldProps>`
  --local-gap: calc(1px * var(--woly-component-level) * var(--woly-main-level));

  display: block;
  box-sizing: border-box;
  width: 100%;

  &[data-row='false'] {
    ${boxVertical}
  }

  &[data-row='true'] {
    display: flex;
    align-items: center;

    & > :not(:first-child) {
      padding-left: var(--local-gap);
    }
  }
`;
