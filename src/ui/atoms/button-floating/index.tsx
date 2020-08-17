import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --bf-background-color
 * --bf-size
 * --bf-position-bottom
 * --bf-position-right
 */

type Props = {
  onClick: (event: React.SyntheticEvent) => void;
};

const ButtonFloating: React.FC<Props & { className?: string }> = (
  p,
  { className },
) => {
  const onClickHandler = React.useCallback((event) => {
    event.preventDefault();

    p.onClick(event);
  }, []);

  return (
    <button type="button" className={className} onClick={onClickHandler}>
      {p.children}
    </button>
  );
};

export const Base = styled(ButtonFloating)`
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;
  cursor: pointer;
  right: var(--bf-position-right, 0);
  bottom: var(--bf-position-bottom, 0);
  width: var(--bf-size, 70px);
  height: var(--bf-size, 70px);
  border: 0;
  border-radius: 50%;
  background-color: var(--bf-background-color, #000);
` as StyledComponent<'button', {}, Props>;
