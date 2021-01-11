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
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );
  --gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  position: relative;

  display: flex;
  align-items: center;
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  input {
    margin: 0;
  }

  & > div {
    padding-left: var(--gap, 1rem);
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
