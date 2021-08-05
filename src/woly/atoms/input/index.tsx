import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { InputContainer, InputElement } from 'ui/elements';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';

type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement> & Priority;

export type InputProps = BaseInputProps & {
  autoComplete?: 'on' | 'off';
  autoFocus?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  name: string;
  onBlur?: React.EventHandler<React.SyntheticEvent>;
  onChange: React.EventHandler<React.SyntheticEvent>;
  onFocus?: React.EventHandler<React.SyntheticEvent>;
  onKeyDown?: React.EventHandler<React.SyntheticEvent>;
  onKeyUp?: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
};

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete = 'off',
      autoFocus = false,
      disabled = false,
      leftIcon,
      name,
      onBlur = () => {},
      onChange,
      onFocus,
      onKeyDown,
      onKeyUp,
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
        autoFocus={autoFocus}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
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
