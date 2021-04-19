import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import { ButtonIcon, Input } from 'ui';
import { block } from 'box-styles';
interface InputPasswordProps {
  className?: string;
  disabled?: boolean;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
  icon: React.ReactNode;
  onClick: React.EventHandler<React.SyntheticEvent>;
}

export const InputPasswordBase: React.FC<InputPasswordProps & Variant> = ({
  className,
  disabled = false,
  icon,
  name,
  onChange,
  onClick,
  placeholder,
  type = 'text',
  value,
  variant = 'default',
}) => (
  <div className={className}>
    <Input
      className={className}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      variant={variant}
      rightIcon={
        <block.S>
          <ButtonIcon
            className={className}
            onClick={onClick}
            disabled={disabled}
            icon={icon}
            variant={variant}
          />
        </block.S>
      }
    />
  </div>
);

export const InputPassword = styled(InputPasswordBase)`
  --local-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );
  
  box-sizing: border-box;
  width: 100%;

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }

` as unknown as StyledComponent<'div', Record<string, unknown>, InputPasswordProps & Variant>;
