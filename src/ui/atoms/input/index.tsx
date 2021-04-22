import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { InputContainer, InputElement } from '../../elements/quarks';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

const InputBase: React.FC<InputProps & Variant> = ({
  className,
  disabled = false,
  leftIcon,
  name,
  onChange,
  placeholder,
  rightIcon,
  type = 'text',
  value,
  variant = 'default',
}) => (
  <InputContainer
    className={className}
    disabled={disabled}
    leftIcon={leftIcon}
    onChange={onChange}
    rightIcon={rightIcon}
    variant={variant}
  >
    <InputElement
      className={className}
      disabled={disabled}
      name={name}
      onChange={onChange}
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
  
  box-sizing: border-box;
  width: 100%;

  &[data-disabled='true'] {
    pointer-events: none;
  }

` as StyledComponent<'div', Record<string, unknown>, InputProps & Variant>;
