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
  isRow?: boolean;
  label?: React.ReactNode;
}

export const FieldBase: React.FC<FieldProps & Variant> = ({
  children,
  className,
  isDisabled,
  isRow,
  label,
  variant = 'default',
}) => {
  return (
    <div
      className={className}
      data-disabled={isDisabled}
      data-row={isRow}
      data-variant={variant}
    >
      <div data-field="label">{label && <Label>{label}</Label>}</div>
      <div data-field="content">{children}</div>
    </div>
  );
};

export const Field = styled(FieldBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  padding-bottom: var(--woly-vertical, 6px) 0;

  box-sizing: border-box;

  label {
    padding: var(--woly-vertical, 6px) 0;
  }

  [data-field='content'] {
    width: var(--woly-width);
  }

  &[data-row='true'] {
    display: flex;
    align-items: center;

    [data-field='label'] {
      padding: 0 var(--woly-horizontal, 6px);
    }
  }

  &:focus-within {
    border-color: var(--woly-border-focus, #9381f1);
  }
` as StyledComponent<'div', Record<string, unknown>, FieldProps & Variant>;
