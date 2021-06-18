import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { ButtonIcon, Input } from 'ui/atoms';
import { IconEyeClosed, IconEyeOpened } from 'static/icons';
import { Priority } from 'lib/types';
import { block } from 'lib/block';

interface InputPasswordProps {
  className?: string;
  disabled?: boolean;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

export const InputPasswordBase: React.FC<InputPasswordProps & Priority> = ({
  className,
  disabled = false,
  name,
  onChange,
  placeholder,
  priority = 'secondary',
  type = 'text',
  value,
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
        type={isVisible ? type : 'password'}
        value={value}
        priority={priority}
        rightIcon={
          <block.S>
            <ButtonIcon
              className={className}
              onClick={onClick}
              disabled={disabled}
              icon={isVisible ? <IconEyeClosed /> : <IconEyeOpened />}
              priority={priority}
            />
          </block.S>
        }
      />
    </div>
  );
};

export const InputPassword = styled(InputPasswordBase)`
  --local-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  box-sizing: border-box;
  width: 100%;

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
` as StyledComponent<'div', Record<string, unknown>, InputPasswordProps & Priority>;
