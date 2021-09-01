import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { InputContainer, InputElement } from 'ui/elements';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';

type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement> & Priority;

export type InputProps = BaseInputProps & {
  autoComplete?: 'on' | 'off';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onBlur?: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
};

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete = 'off',
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
      ...rest
    },
    inputRef,
  ) => (
    <InputContainer
      ref={inputRef}
      disabled={disabled}
      leftIcon={leftIcon}
      onChange={onChange}
      rightIcon={rightIcon}
      priority={priority}
      {...rest}
    >
      <InputElement
        autoComplete={autoComplete}
        disabled={disabled}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </InputContainer>
  ),
);

export const Input = styled(InputBase)`
  box-sizing: border-box;
  width: 100%;

  &[data-disabled='true'] {
    pointer-events: none;
  }
` as StyledComponent<'div', Record<string, unknown>, InputProps>;
