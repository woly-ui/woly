import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { verticalBox } from 'ui/elements/quarks';

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
  /* padding-bottom: var(--local-vertical, 6px); */

  ${verticalBox}

  box-sizing: border-box;
  width: 100%;

  label {
    /* padding: var(--local-vertical, 6px) 0; */
  }

  &[data-row='true'] {
    display: flex;
    align-items: center;

    [data-field='label'] {
      /* padding: 0 var(--local-horizontal, 6px); */
    }
  }
` as StyledComponent<'label', Record<string, unknown>, FieldProps & Variant>;
