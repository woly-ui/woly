import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

interface ChipProps {
  text?: string;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  outlined?: boolean;
  rightIcon?: React.ReactNode;
}

const ChipBase: React.FC<ChipProps & Priority> = ({
  className,
  disabled,
  leftIcon,
  onClick,
  outlined,
  priority = 'secondary',
  rightIcon,
  text,
}) => {
  const chipRole = onClick ? 'button' : 'div';
  const chipTabIndex = onClick ? 0 : -1;

  const onKeyDown = React.useCallback(
    (event) => {
      if (event.key === 'Enter' && onClick) {
        onClick(event);
      }
    },
    [onClick],
  );
  return (
    <div
      className={className}
      data-disabled={disabled}
      data-outlined={outlined}
      data-priority={priority}
    >
      {leftIcon && (
        <div data-icon="chip-visual-block" onClick={onClick} onKeyDown={onKeyDown}>
          {leftIcon}
        </div>
      )}
      <div
        data-text="chip-text-content"
        onClick={onClick}
        onKeyDown={onKeyDown}
        role={chipRole}
        tabIndex={chipTabIndex}
      >
        {text}
      </div>
      {rightIcon && <div data-icon="chip-action-block">{rightIcon}</div>}
    </div>
  );
};

export const Chip = styled(ChipBase)`
  ${box}
  --local-shape-color: var(--woly-shape-default);
  --local-icon-size: var(--woly-line-height);
  --local-text-color: var(--woly-shape-text-default);
  --local-border-color: var(--woly-shape-default);

  display: flex;
  align-items: center;

  box-sizing: border-box;

  color: var(--local-text-color);
  font-size: var(--woly-font-size);

  background-color: var(--local-shape-color);
  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  [data-element='text'] {
    display: flex;
    flex: 1;

    line-height: var(--woly-line-height);

    outline: none;
  }

  [data-icon='chip-visual-block'] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: var(--local-text-color);
      }
    }
  }

  [data-icon='chip-action-block'] {
    --woly-component-level: 0;
  }

  &[data-outlined='true'] {
    --local-shape-color: transparent;
    --local-text-color: var(--woly-shape-default);

    [data-icon='chip-visual-block'] > svg > path {
      fill: var(--woly-shape-default);
    }
    &:hover {
      --local-shape-color: transparent;
      --local-text-color: var(--woly-shape-hover);
    }

    &:active,
    &:focus-within {
      --local-shape-color: transparent;
      --local-text-color: var(--woly-shape-active);
    }
  }

  &[role='button']:focus-within {
    --local-shape-color: var(--woly-shape-active);
    --local-border-color: var(--woly-shape-active);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }

  &[role='button']:hover {
    --local-text-color: var(--woly-shape-text-hover);
    --local-shape-color: var(--woly-shape-hover);
    --local-border-color: var(--woly-shape-hover);
  }

  &[role='button']:active {
    --local-text-color: var(--woly-shape-text-active);
    --local-shape-color: var(--woly-shape-active);
    --local-border-color: var(--woly-shape-active);
  }

  &[data-disabled='true'] {
    --local-shape-color: var(--woly-shape-disabled);
    --local-text-color: var(--woly-shape-text-disabled);
    --local-border-color: var(--woly-shape-disabled);

    pointer-events: none;
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Priority>;
