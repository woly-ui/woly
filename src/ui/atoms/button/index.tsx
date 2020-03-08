import styled, { StyledComponent } from 'styled-components';

export type ButtonVariants = 'default' | 'primary' | 'warning' | 'text';
export type ButtonSizes = 'default' | 'small';

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
};

const map = (properties: ButtonProps) => ({
  'data-variant': properties.variant,
  'data-size': properties.size,
});

type Styled<P extends {}> = StyledComponent<any, P>;

export const Button: Styled<ButtonProps> = styled.button.attrs(map)`
  border-radius: var(--button-border-radius);
  border: 1px solid transparent;

  &[data-variant='default'] {
    background-color: var(--ghost);
    color: var(--primary-ghost-text);
    border-color: var(--primary-ghost-border);
  }
  &[data-variant='primary'] {
    background-color: var(--primary);
    color: var(--primary-text);
    border-color: var(--primary-border);
  }
  &[data-variant='warning'] {
    background-color: var(--warning);
    color: var(--warning-text);
    border-color: var(--warning-border);
  }
  &[data-variant='text'] {
    background-color: var(--ghost);
    color: var(--ghost-text);
    border-color: var(--ghost);
  }

  &[data-size='small'] {
    font-size: var(--button-font-size-small);
    line-height: var(--button-height-small);
    padding: 0 14px;
  }
  &[data-size='default'] {
    font-size: var(--button-font-size-normal);
    line-height: var(--button-height-normal);
    padding: 0 24px;
  }
`;
