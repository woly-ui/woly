import * as React from 'react';
import styled from 'styled-components';

export type ButtonTypes = 'primary' | 'warning' | 'link';
export type ButtonSizes = 'normal' | 'small';

type ButtonProps = {
  type?: ButtonTypes;
  size?: ButtonSizes;
  ghost?: boolean;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'normal',
  ghost = false,
  className,
  children,
  onClick,
}) => {
  return (
    <WolyButton
      className={className}
      onClick={onClick}
      type="submit"
      styleType={type}
      styleSize={size}
      ghost={ghost}
    >
      {children}
    </WolyButton>
  );
};

type TitleProps = {
  styleType: ButtonTypes;
  styleSize: ButtonSizes;
  ghost: boolean;
};

const map = (props: TitleProps) => ({
  'data-type': props.styleType,
  'data-size': props.styleSize,
  'data-ghost': props.ghost,
});

const WolyButton: any = styled.button.attrs(map)`
  &[data-type='primary'] {
    background-color: var(--primary);
    color: var(--primary-text);
    border: var(--primary-border);

    &[data-ghost='true'] {
      background-color: var(--ghost);
      color: var(--primary-ghost-text);
      border: var(--primary-ghost-border);
    }
  }

  &[data-type='warning'] {
    background-color: var(--warning);
    color: var(--warning-text);
    border: var(--warning-border);

    &[data-ghost='true'] {
      background-color: var(--ghost);
      color: var(--warning-ghost-text);
      border: var(--warning-ghost-border);
    }
  }

  &[data-type='link'] {
    background-color: var(--ghost);
    color: var(--ghost-text);
    border: 1px solid var(--ghost);
  }

  &[data-size='small'] {
    font-size: var(--button-font-size-small);
    line-height: var(--button-height-small);
    padding: 0 14px;
  }

  &[data-size='normal'] {
    font-size: var(--button-font-size-normal);
    line-height: var(--button-height-normal);
    padding: 0 24px;
  }

  border-radius: var(--button-border-radius);
`;
