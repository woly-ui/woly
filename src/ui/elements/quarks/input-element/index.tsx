import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value?: HTMLInputElement['value'];
}

const InputElementBase: React.FC<InputElementProps> = ({
  className,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
  ...p
}) => (
  <input
    className={className}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
    {...p}
  />
);

export const InputElement = styled(InputElementBase)`
  --local-value-color: var(--woly-canvas-text-default);
  --local-background: var(--woly-canvas-default);

  width: 100%;

  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);

  color: var(--local-value-color);
  background: var(--local-background);

  padding: 0;

  border: none;
  outline: none;

  &::placeholder {
    color: var(--woly-canvas-text-disabled);
  }
` as StyledComponent<'input', Record<string, unknown>, InputElementProps>;
