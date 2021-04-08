import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import { Label } from '../../atoms';

/**
 * --woly-border
 * --woly-border-focus
 * --woly-border-disabled
 * --woly-border-width
 * --woly-rounding
 *
 * --woly-background
 * --woly-background-diabled
 * --woly-color
 * --woly-color-disabled
 */

interface FieldProps {
  className?: string;
  isDisabled?: boolean;
  label?: React.ReactNode;
  row?: boolean;
}

export const FieldBase: React.FC<FieldProps & Variant> = ({
  className,
  isDisabled,
  label,
  variant = 'default',
  children,
  row,
}) => (
  <div
    className={className}
    data-variant={variant}
    data-disabled={isDisabled}
    data-row={row}
  >
    <div data-field="label">{label && <Label>{label}</Label>}</div>
    <div data-field="content">{children}</div>
  </div>
);

export const Field = styled(FieldBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  --woly-width: 100%;

  padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);

  width: var(--woly-width);

  box-sizing: border-box;

  label {
    padding: var(--woly-vertical, 6px) 0;
  }

  [data-field='content'] {
    width: 100%;
  }

  &[data-row='true'] {
    display: flex;
    align-items: center;

    [data-field='label'] {
      padding: 0 var(--woly-horizontal, 6.4px);
    }
  }

  &:focus-within {
    border-color: var(--woly-border-focus, #9381f1);
  }

  &[data-disabled='true'] {
    [data-field='label'] {
      color: var(--woly-color-disabled, #c0c0c0);
    }
  }
` as StyledComponent<'div', Record<string, unknown>, FieldProps & Variant>;
