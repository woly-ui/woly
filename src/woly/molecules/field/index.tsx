import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Label } from 'ui/atoms';
import { Priority } from 'lib/types';
import { boxVertical } from 'ui/atoms/box';

interface FieldProps {
  className?: string;
  id?: string;
  row?: boolean;
  label?: React.ReactNode;
}

const FieldBase: React.FC<FieldProps & Priority> = ({
  children,
  className,
  label,
  priority = 'secondary',
  row = false,
}) => (
  <Label data-field="label" className={className} data-row={row} data-priority={priority}>
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
` as StyledComponent<'label', Record<string, unknown>, FieldProps & Priority>;
