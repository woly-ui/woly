import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface CheckboxProps {
  className?: string;
  id: string;
  isChecked: boolean;
  label?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  variant?: string;
}

const CheckboxBase: React.FC<CheckboxProps> = ({
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
    padding-right: 15px;
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps>;
