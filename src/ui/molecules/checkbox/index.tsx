import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface CheckboxProps {
  id: string;
  isChecked: boolean;
  label?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps & { className: string }> = ({
  className,
  id,
  isChecked,
  label,
  onChange,
}) => (
  <div className={className}>
    {label && <div>{label}</div>}
    <input type="checkbox" onChange={onChange} id={id} checked={isChecked} />
  </div>
);

export const Base = styled(Checkbox)`
  position: relative;

  display: flex;
  align-items: center;

  & > div {
    padding-right: 15px;
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps>;
