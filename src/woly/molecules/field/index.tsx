import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Label, Box } from 'ui/atoms';
import { Priority } from 'lib/types';
import { boxVertical } from 'ui/elements/box';

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
  <Label className={className} data-row={row} data-priority={priority} data-label>
    <Box>{label}</Box>
    <div data-content>{children}</div>
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
