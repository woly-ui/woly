import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --bi-background-color
 * --bi-padding
 * --bi-rounding
 */

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
}

const ButtonIcon: React.FC<Props & { className?: string }> = ({
  className,
  icon,
  onClick,
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
    <button type="button" className={className} onClick={onClickHandler} {...p}>
      {icon}
    </button>
  );
};

export const Base = styled(ButtonIcon)`
  display: block;
  padding: var(--bi-padding, 0);

  background-color: var(--bi-background-color, transparent);
  border: 0;
  border-radius: var(--bi-rounding, 0);
  cursor: pointer;
` as StyledComponent<'button', Record<string, unknown>, Props>;
