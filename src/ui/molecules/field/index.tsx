import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { box, boxVertical } from 'ui/elements/quarks';

import { Label } from '../../atoms';

interface FieldProps {
  className?: string;
  id?: string;
  row?: boolean;
  label?: React.ReactNode;
}

const FieldBase: React.FC<FieldProps & Variant> = ({
  children,
  className,
  label,
  row = false,
  variant = 'secondary',
}) => (
  <Label data-field="label" className={className} data-row={row} data-variant={variant}>
    <span>{label}</span>
    <div data-field="content">{children}</div>
  </Label>
);

export const Field = styled(FieldBase)`
  --local-gap: calc(1px * var(--woly-component-level) * var(--woly-main-level));

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
` as StyledComponent<'label', Record<string, unknown>, FieldProps & Variant>;
