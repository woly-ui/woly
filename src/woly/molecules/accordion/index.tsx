import * as React from 'react';
import styled from 'styled-components';
import { IconArrowDown } from 'static/icons';
import { Priority } from 'lib/types';
import { forwardRef } from 'react';

type BaseAccordionProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type AccordionProps = BaseAccordionProps & {
  isOpen: boolean;
  title?: React.ReactNode;
};

const AccordionBase = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, isOpen = true, priority = 'secondary', title, ...rest }, accordionRef) => {
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
      <div ref={accordionRef} data-priority={priority} data-open={isContentVisible} {...rest}>
        <div data-element="header" onClick={setContentVisible} onKeyDown={onKeyDown} tabIndex={0}>
          <div data-element="title">{title}</div>
          <div data-element="icon">
            <IconArrowDown />
          </div>
        </div>
        <div data-element="content">{children}</div>
      </div>
    );
  },
);

export const Accordion = styled(AccordionBase)<AccordionProps>`
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

  [data-element='header'] {
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: calc(var(--woly-border-width) * -1);

    padding: var(--local-vertical) var(--local-horizontal);

    background: var(--local-background-color);

    border-bottom: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--woly-rounding);

    outline: none;

    &:hover {
      --local-background-color: var(--woly-canvas-disabled);
    }

    &:focus,
    &:active {
      box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    }
  }

  [data-element='title'] {
    flex: 1;
  }

  [data-element='icon'] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: var(--local-icon-size);
    height: var(--local-icon-size);

    svg > path {
      fill: var(--local-icon-fill);
    }
  }

  [data-element='content'] {
    display: none;
  }

  &[data-open='true'] > [data-element='header'] {
    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-canvas-default);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &[data-open='true'] > [data-element='header'] > [data-element='icon'] {
    transform: rotate(180deg);
  }

  &[data-open='true'] > [data-element='content'] {
    display: block;
    width: 100%;

    height: auto;
  }
`;
