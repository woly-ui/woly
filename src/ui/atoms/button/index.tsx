import * as React from 'react';
import styled from 'styled-components';

export type ButtonTypes = 'primary' | 'ghost' | 'warning';
export type ButtonSizes = 'normal' | 'small';

type ButtonProps = {
  type?: ButtonTypes;
  size?: ButtonSizes;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'normal',
  className,
  children,
  onClick,
}) => {
  return (
    <WolyButton
      className={className}
      onClick={onClick}
      type="submit"
      size={size}
      styleType={type}
    >
      {children}
    </WolyButton>
  );
};

const buttonStyles = {
  primary: `
    background-color: var(--primary);
    color: var(--primary-text);`,
  ghost: `
    background-color: transparent;
    color: var(--ghost-text);`,
  warning: `
    background-color: var(--warning);
    color: var(--warning-text);`,
};

const buttonSizes = {
  normal: `
    font-size: 1.8rem;
    line-height: 4.2rem;
    padding: 0 24px;
    `,
  small: `
    font-size: 1.2rem;
    line-height: 2.7rem;
    padding: 0 14px;
    `,
};

type WolyButtonProps = {
  styleType: ButtonTypes;
  size: ButtonSizes;
};

const WolyButton = styled.button<WolyButtonProps>`
  ${(p) => buttonStyles[p.styleType]}
  ${(p) => buttonSizes[p.size]}

  ${(p) =>
    p.size === 'small' &&
    p.styleType === 'ghost' &&
    `
    border: 1px solid var(--ghost-border);
    color: var(--ghost-text);
  `}

  ${(p) =>
    p.size === 'small' &&
    p.styleType === 'warning' &&
    `
    background-color: transparent;
    border: 1px solid var(--warning);
    color: var(--warning);
  `}

  border-radius: 3px;
`;
