import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --bi-background-color
 * --bi-padding
 * --bi-rounding
 */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: string;
}

const ButtonIconBase: React.FC<Props> = ({
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
      data-variant={variant}
      onClick={onClickHandler}
      type="button"
      {...p}
    >
      {icon}
    </button>
  );
};

export const ButtonIcon = styled(ButtonIconBase)`
  display: block;
  padding: var(--bi-padding, 0);

  background-color: var(--bi-background-color, transparent);
  border: 0;
  border-radius: var(--bi-rounding, 0);
  cursor: pointer;
` as StyledComponent<'button', Record<string, unknown>, Props>;
