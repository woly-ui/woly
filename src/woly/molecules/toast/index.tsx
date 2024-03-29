import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { forwardRef } from 'react';

type BaseToastProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type ToastProps = BaseToastProps & {
  action?: React.ReactNode;
  icon?: React.ReactNode;
  weight?: string;
};

const ToastBase = forwardRef<HTMLDivElement, ToastProps>(
  ({ action, children, icon, weight = 'fill', priority = 'secondary', ...rest }, toastRef) => (
    <div ref={toastRef} data-weight={weight} data-priority={priority} {...rest}>
      {icon && (
        <span data-element="icon" data-box-role="icon">
          {icon}
        </span>
      )}
      <div data-element="content">{children}</div>
      {action && <span data-element="action">{action}</span>}
    </div>
  ),
);

export const Toast = styled(ToastBase)<ToastProps>`
  ${box}

  --local-toast-gap: max(
    var(--woly-const-m),
    calc(1px * var(--woly-component-level) * var(--woly-main-level))
  );
  --local-icon-size: var(--woly-line-height);

  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  min-width: fit-content;
  max-width: 75%;

  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  border-style: solid;

  border-width: var(--woly-border-width);

  border-radius: var(--woly-rounding);
  outline: none;

  [data-element='content'] {
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
  }

  [data-element='icon'] {
    --woly-component-level: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }

  [data-element='action'] {
    --woly-component-level: 0;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: var(--local-toast-gap);
    }
  }

  &[data-weight='fill'] {
    --local-text-color: var(--woly-shape-text-default);
    --local-shape-color: var(--woly-shape-default);
    --local-border-color: var(--woly-shape-default);

    color: var(--local-text-color);

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    [data-element='icon'] > svg > path {
      fill: var(--local-text-color);
    }

    [data-element='icon'] > svg > g {
      stroke: var(--local-text-color);
    }
  }

  &[data-weight='outline'] {
    --local-text-color: var(--woly-shape-default);
    --local-shape-color: transparent;
    --local-border-color: var(--woly-shape-default);

    color: var(--local-text-color);

    background-color: transparent;
    border-color: var(--local-text-color);

    [data-element='icon'] > svg > path {
      fill: var(--local-text-color);
    }

    [data-element='icon'] > svg > g {
      stroke: var(--local-text-color);
    }
  }

  &[data-weight='goast'] {
    --local-text-color: var(--woly-shape-text-default);
    --local-shape-color: transparent;
    --local-border-color: var(--woly-shape-text-default);
    --local-shadow: var(--woly-border-width) var(--woly-border-width)
      calc(var(--woly-border-width) * 4) hsla(0, 0%, 100%, 50%);

    color: var(--local-text-color);

    background-color: var(--local-shape-color);
    border-color: var(--local-border-color);

    box-shadow: var(--local-shadow);

    [data-element='icon'] > svg > path {
      fill: var(--local-text-color);
    }

    [data-element='icon'] > svg > g {
      stroke: var(--local-text-color);
    }
  }

  &[data-weight='transparent'] {
    --local-text-color: var(--woly-shape-default);
    --local-shape-color: transparent;
    --local-border-color: transparent;

    color: var(--local-text-color);

    background-color: var(--local-shape-color);
    border-color: var(--local-shape-color);

    [data-element='icon'] > svg > path {
      fill: var(--local-text-color);
    }

    [data-element='icon'] > svg > g {
      stroke: var(--local-text-color);
    }
  }
`;
