import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { IconArrowDown } from 'static/icons';
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
      if ((isContentVisible && key === 'Escape') || key === 'Enter') {
        setContentVisible();
      }
    },
    [isContentVisible],
  );
  return (
    <div className={className} data-variant={variant}>
      <div
        data-header
        data-open={isContentVisible}
        onClick={setContentVisible}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        <div data-title>{title}</div>
        <div data-icon>
          <IconArrowDown />
        </div>
      </div>
      <div data-content>{children}</div>
    </div>
  );
};

export const Accordion = styled(AccordionBase)`
  --local-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level) - var(--woly-border-width)
  );
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical) -
      var(--woly-border-width)
  );

  --local-background-color: var(--woly-canvas-default);
  --local-border-color: var(--woly-canvas-disabled);

  --local-icon-fill: var(--woly-canvas-text-default);
  --local-icon-size: var(--woly-line-height);

  box-sizing: border-box;
  width: 100%;

  outline: none;

  input {
    display: none;
    outline: none;
  }

  [data-header] {
    display: flex;
    align-items: center;

    background: var(--local-background-color);

    border-bottom: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--woly-rounding);

    padding: var(--local-vertical) var(--local-horizontal);

    outline: none;

    margin-bottom: var(--woly-border-width);

    &:hover {
      --local-background-color: var(--woly-canvas-disabled);
    }

    &:focus,
    &:active {
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    }
  }

  [data-title] {
    flex: 1;
  }

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      fill: var(--local-icon-fill);
    }
  }

  [data-content] {
    display: none;
  }

  [data-open='true'] {
    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-canvas-default);
  }

  [data-open='true'] > [data-icon] {
    transform: rotate(180deg);
  }

  [data-open='true'] ~ [data-content] {
    display: inline-block;

    height: auto;
    width: 100%;
  }
` as StyledComponent<'div', Record<string, unknown>, AccordionProps & Variant>;
