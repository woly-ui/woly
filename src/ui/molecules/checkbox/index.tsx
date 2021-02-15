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
  <CheckboxWrapper htmlFor={id} className={className} data-variant={variant}>
    <input type="checkbox" onChange={onChange} id={id} checked={isChecked} />
    {label && <span>{label}</span>}
  </CheckboxWrapper>
);

export const CheckboxWrapper = styled.label`
  --vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--vertical)
  );
  --gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  display: flex;
  padding: var(--vertical, 16px) var(--horizontal, 6.4px);

  cursor: pointer;

  & > *:not(:first-child) {
    margin-left: var(--gap);
  }
`;

export const Checkbox = styled(CheckboxBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  position: relative;

  display: flex;
  align-items: center;
  padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);

  input {
    margin: 0;
  }

  & > div {
    padding-left: var(--woly-gap, 16px);
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
