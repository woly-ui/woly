import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

import ClosedEyeIcon from '../../../static/icons/closed-eye.svg';
import OpenedEyeIcon from '../../../static/icons/opened-eye.svg';
import { ButtonIcon, Input } from '../../atoms';
interface InputPasswordProps {
  disabled?: boolean;
  iconHidden?: React.ReactNode;
  iconOpen?: React.ReactNode;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: HTMLInputElement['value'];
}

export const InputPasswordBase: React.FC<InputPasswordProps & Variant> = ({
  disabled,
  iconHidden,
  iconOpen,
  name,
  onChange,
  placeholder,
  value,
  variant = 'default',
}) => {
  const [isVisible, onClick] = React.useReducer((is) => !is, false);

  const closeEye = iconHidden ?? <ClosedEyeIcon />;
  const openEye = iconOpen ?? <OpenedEyeIcon />;

  return (
    <Input
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={isVisible ? 'text' : 'password'}
      value={value}
      right={
        <ButtonIcon
          onClick={onClick}
          disabled={disabled}
          icon={isVisible ? closeEye : openEye}
        />
      }
    />
  );
};

export const InputPassword = styled(InputPasswordBase)`
  --woly-gap: calc(
    (1px * var(--woly-main-level)) + (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  & > *:not(:first-child) {
    margin-left: var(--woly-gap);
  }
` as StyledComponent<'div', Record<string, unknown>, InputPasswordProps & Variant>;
