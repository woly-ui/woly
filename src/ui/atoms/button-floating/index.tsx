import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --bf-background-color
 * --bf-size
 * --bf-position-bottom
 * --bf-position-right
 */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: string;
}

const ButtonFloatingBase: React.FC<Props> = ({
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
  right: var(--bf-position-right, 0);
  bottom: var(--bf-position-bottom, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--bf-size, 70px);
  height: var(--bf-size, 70px);

  background-color: var(--bf-background-color, #000);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
` as StyledComponent<'button', Record<string, unknown>, Props>;
