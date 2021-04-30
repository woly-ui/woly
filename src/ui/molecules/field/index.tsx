import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

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
  <div className={className} data-row={row} data-variant={variant}>
    <div data-field="label">
      <Label>
        {label}
        <div data-field="content">{children}</div>
      </Label>
    </div>
  </div>
);

export const Field = styled(FieldBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  padding-bottom: var(--local-vertical, 6px);

  box-sizing: border-box;

  width: 100%;

  label {
    padding: var(--local-vertical, 6px) 0;
  }

  &[data-row='true'] {
    display: flex;
    align-items: center;

    [data-field='label'] {
      padding: 0 var(--local-horizontal, 6px);
    }
  }
` as StyledComponent<'label', Record<string, unknown>, FieldProps & Variant>;
