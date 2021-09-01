import * as React from 'react';
import styled from 'styled-components';
import { ButtonIcon, Input } from 'ui/atoms';
import { IconEyeClosed, IconEyeOpened } from 'static/icons';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';

type BaseInputPasswordProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type InputPasswordProps = BaseInputPasswordProps & {
  disabled?: boolean;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
  weight?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export const InputPasswordBase = forwardRef<HTMLDivElement, InputPasswordProps>(
  (
    {
      disabled = false,
      name,
      onChange,
      placeholder,
      priority = 'secondary',
      type = 'text',
      value,
      weight,
      ...rest
    },
    wrapperRef,
  ) => {
    const [isVisible, onClick] = React.useReducer((is) => !is, false);

    return (
      <Input
        ref={wrapperRef}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={isVisible ? type : 'password'}
        value={value}
        priority={priority}
        rightIcon={
          <ButtonIcon
            onClick={onClick}
            disabled={disabled}
            icon={isVisible ? <IconEyeClosed /> : <IconEyeOpened />}
            priority={priority}
            weight={weight}
          />
        }
        {...rest}
      />
    );
  },
);

export const InputPassword = styled(InputPasswordBase)<InputPasswordProps>`
  --local-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  box-sizing: border-box;
  width: 100%;

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
`;
