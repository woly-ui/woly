import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { ButtonIcon, Input } from 'ui';
import { ClosedEyeIcon, InfoIcon, OpenedEyeIcon } from 'icons';
import { Variant } from 'lib/types';
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
}

export const InputPasswordBase: React.FC<InputPasswordProps & Variant> = ({
  className,
  disabled = false,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
  variant = 'secondary',
}) => {
  const [isVisible, onClick] = React.useReducer((is) => !is, false);

  return (
    <div className={className}>
      <Input
        className={className}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={isVisible ? 'text' : 'password'}
        value={value}
        variant={variant}
        rightIcon={
          <block.S>
            <ButtonIcon
              className={className}
              onClick={onClick}
              disabled={disabled}
              icon={isVisible ? <ClosedEyeIcon /> : <OpenedEyeIcon />}
              variant={variant}
            />
          </block.S>
        }
      />
    </div>
  );
};

export const InputPassword = (styled(InputPasswordBase)`
  --local-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  box-sizing: border-box;
  width: 100%;

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
` as unknown) as StyledComponent<'div', Record<string, unknown>, InputPasswordProps & Variant>;
