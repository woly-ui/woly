import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { InputContainer, InputElement } from '../../elements/quarks';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  left?: React.ReactNode;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  right?: React.ReactNode;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

const InputBase: React.FC<InputProps & Variant> = ({
  className,
  disabled,
  left,
  name,
  onChange,
  placeholder,
  right,
  type,
  value,
  variant = 'default',
}) => (
  <InputContainer
    className={className}
    disabled={disabled}
    left={left}
    onChange={onChange}
    right={right}
    variant={variant}
  >
    <InputElement
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </InputContainer>
);

export const Input = styled(InputBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );
  
  box-sizing: border-box;
  width: 100%;

  padding: var(--local-vertical) var(--local-horizontal);

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }

` as StyledComponent<'div', Record<string, unknown>, InputProps & Variant>;
