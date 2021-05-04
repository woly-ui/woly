import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-bf-size
 *
 * --woly-background
 * --woly-border
 *
 * --woly-background-hover
 * --woly-border-hover
 *
 * --woly-background-focus
 * --woly-border-focus
 *
 * --woly-background-disabled
 * --woly-border-disabled
 */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonFloatingBase: React.FC<Props & Variant> = ({
  icon,
  onClick,
  variant = 'secondary',
  ...p
}) => {
  const onClickHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onClick(event);
    },
    [onClick],
  );

  return (
    <button type="button" data-variant={variant} onClick={onClickHandler} {...p}>
      {icon}
    </button>
  );
};

export const ButtonFloating = styled(ButtonFloatingBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--woly-bf-size, 70px);
  height: var(--woly-bf-size, 70px);

  background-color: var(--woly-background, #000000);
  border-color: var(--woly-border, #000000);
  border-style: solid;

  border-width: var(--woly-border-width, 0);
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: var(--woly-background-hover, #000000);
    border-color: var(--woly-border-hover, var(--woly-background-hover, #000000));
    outline: none;
  }

  &:focus,
  &:active {
    background-color: var(--woly-background-focus, #000000);
    border-color: var(--woly-border-focus, var(--woly-background-focus, #000000));
    outline: none;
  }

  &:disabled {
    background-color: var(--woly-background-disabled, #000000);
    border-color: var(--woly-border-disabled, var(--woly-background-disabled, #000000));
  }
` as StyledComponent<'button', Record<string, unknown>, Props & Variant>;
