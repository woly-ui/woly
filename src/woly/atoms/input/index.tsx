import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { InputContainer, InputElement } from 'ui/elements';
import { Priority } from 'lib/types';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  autoComplete?: 'on' | 'off';
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onBlur?: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

const InputBase: React.FC<InputProps & Priority> = ({
  autoComplete = 'off',
  className,
  disabled = false,
  leftIcon,
  name,
  onChange,
  onBlur = () => {},
  placeholder,
  priority = 'secondary',
  rightIcon,
  type = 'text',
  value,
}) => (
  <InputContainer
    className={className}
    disabled={disabled}
    leftIcon={leftIcon}
    onChange={onChange}
    rightIcon={rightIcon}
    priority={priority}
  >
    <InputElement
      autoComplete={autoComplete}
      className={className}
      disabled={disabled}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </InputContainer>
);

export const Input = styled(InputBase)`
  box-sizing: border-box;
  width: 100%;

  &[data-disabled='true'] {
    pointer-events: none;
  }
` as StyledComponent<'div', Record<string, unknown>, InputProps & Priority>;
