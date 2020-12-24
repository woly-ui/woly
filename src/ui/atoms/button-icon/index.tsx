import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-bi-background-color
 * --woly-bi-padding
 * --woly-bi-rounding
 */

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonIconBase: React.FC<Props & Variant> = ({
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
  padding: var(--woly-bi-padding, 0);

  background-color: var(--woly-bi-background-color, transparent);
  border: 0;
  border-radius: var(--woly-bi-rounding, 0);
  cursor: pointer;
` as StyledComponent<'button', Record<string, unknown>, Props & Variant>;
