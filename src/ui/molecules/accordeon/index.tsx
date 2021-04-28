import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { ArrowDown } from 'icons';
import { Variant } from 'lib/types';

interface AccordionProps {
  className?: string;
  isOpen: boolean;
  title?: React.ReactNode;
}

const AccordionBase: React.FC<AccordionProps & Variant> = ({
  children,
  className,
  isOpen = true,
  title,
  variant = 'secondary',
}) => {
  const [isContentVisible, setContentVisible] = React.useReducer((is) => !is, isOpen);

  const onKeyDown = React.useCallback(
    ({ key }) => {
      if (isContentVisible && key === 'Escape') {
        setContentVisible();
      }
      if (key === 'Enter') {
        setContentVisible();
      }
    },
    [isContentVisible],
  );
  return (
    <div className={className} data-variant={variant}>
      <div
        data-container
        data-open={isContentVisible}
        onClick={setContentVisible}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        <div data-title>{title}</div>
        <div data-icon>
          <ArrowDown />
        </div>
      </div>
      <div data-content>{children}</div>
    </div>
  );
};

export const Accordion = styled(AccordionBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-canvas-disabled);

  --local-icon-fill: var(--woly-canvas-text-default);

  --local-gap: var(--woly-const-m);

  border-radius: var(--woly-rounding);

  box-sizing: border-box;
  width: 100%;

  outline: none;
  overflow: hidden;

  input {
    display: none;
    outline: none;
  }

  [data-container] {
    display: flex;
    align-items: center;

    background: var(--local-background-color);
    padding: var(--local-vertical) var(--local-horizontal);

    border-bottom: var(--woly-border-width) solid var(--local-border-color);
  }

  [data-title] {
    flex: 1;
  }

  [data-icon] {
    flex-shrink: 0;

    svg > path {
      fill: var(--local-icon-fill);
    }
  }

  [data-content] {
    display: none;

    min-width: 100%;

    padding: var(--local-vertical) var(--local-horizontal);
  }

  [data-open='true'] {
    --local-background-color: var(--woly-canvas-disabled);
    border-bottom: none;
  }

  [data-open='true'] > [data-icon] {
    transform: rotate(180deg);
  }

  [data-open='true'] ~ [data-content] {
    display: inline-block;
    height: auto;
  }

  &:hover > [data-container] {
    --local-background-color: var(--woly-canvas-disabled);
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    outline: none;
  }
` as StyledComponent<'div', Record<string, unknown>, AccordionProps & Variant>;
