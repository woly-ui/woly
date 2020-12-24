import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-bf-background-color
 * --woly-bf-size
 * --woly-bf-position-bottom
 * --woly-bf-position-right
 */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonFloatingBase: React.FC<Props & Variant> = ({
  icon,
  onClick,
  variant = 'default',
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
    <button
      type="button"
      data-variant={variant}
      onClick={onClickHandler}
      {...p}
    >
      {icon}
    </button>
  );
};

export const ButtonFloating = styled(ButtonFloatingBase)`
  position: fixed;
  right: var(--woly-bf-position-right, 0);
  bottom: var(--woly-bf-position-bottom, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--woly-bf-size, 70px);
  height: var(--woly-bf-size, 70px);

  background-color: var(--woly-bf-background-color, #000);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
` as StyledComponent<'button', Record<string, unknown>, Props & Variant>;
