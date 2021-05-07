import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { box } from 'ui/elements';

interface ChipProps {
  children?: string;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  rightIcon?: React.ReactNode;
}

const ChipBase: React.FC<ChipProps & Variant> = ({
  children,
  className,
  disabled,
  leftIcon,
  onClick,
  rightIcon,
  variant = 'secondary',
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
    <div className={className} data-disabled={disabled} data-variant={variant} role={chipRole}>
      {leftIcon && (
        <div data-icon onClick={onClick} onKeyDown={onKeyDown}>
          {leftIcon}
        </div>
      )}
      <div data-text tabIndex={chipTabIndex} onClick={onClick} onKeyDown={onKeyDown}>
        {children}
      </div>
      {rightIcon && <div data-icon>{rightIcon}</div>}
    </div>
  );
};

export const Chip = styled(ChipBase)`
  ${box}
  --local-background: var(--woly-shape-default);
  --local-icon-size: var(--woly-line-height);
  --local-color: var(--woly-shape-text-default);
  --local-border-color: var(--woly-shape-default);

  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: var(--local-background);
  color: var(--local-color);
  border-radius: var(--woly-rounding);
  font-size: var(--woly-font-size);
  outline: none;
  border: var(--woly-border-width) solid var(--local-border-color);

  [data-text] {
    outline: none;
    line-height: var(--woly-line-height);
  }

  &[role='button']:focus-within {
    --local-background: var(--woly-focus);
    --local-border-color: var(--woly-shape-active);

    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-shape-default);
  }

  &[role='button']:hover {
    --local-background: var(--woly-shape-hover);
    --local-border-color: var(--woly-shape-hover);
  }

  &[data-disabled='true'] {
    --local-background: var(--woly-shape-disabled);
    --local-text: var(--woly-shape-text-disabled);
    --local-border-color: var(--woly-shape-disabled);

    pointer-events: none;
  }

  [data-icon] {
    --woly-component-level: 0;
    display: flex;
  }
` as StyledComponent<'div', Record<string, unknown>, ChipProps & Variant>;
