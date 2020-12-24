import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

interface CheckboxProps {
  className?: string;
  id: string;
  isChecked: boolean;
  label?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxBase: React.FC<CheckboxProps & Variant> = ({
  className,
  id,
  isChecked,
  label,
  onChange,
  variant = 'default',
}) => (
  <div className={className} data-variant={variant}>
    <input type="checkbox" onChange={onChange} id={id} checked={isChecked} />
    {label && <div>{label}</div>}
  </div>
);

export const Checkbox = styled(CheckboxBase)`
  position: relative;

  display: flex;
  align-items: center;

  & > div {
    padding: var(--woly-checkbox-padding);
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
