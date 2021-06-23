import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/atoms/box';

interface ToastProps {
  action?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  outlined?: boolean;
}

const ToastBase: React.FC<ToastProps & Priority> = ({
  action,
  children,
  className,
  icon,
  outlined = false,
  priority = 'secondary',
}) => (
  <div className={className} data-outlined={outlined} data-priority={priority}>
    {icon && <span data-icon="toast">{icon}</span>}
    <div data-content>{children}</div>
    {action && <span data-action>{action}</span>}
  </div>
);

export const Toast = styled(ToastBase)`
  ${box}
  --local-text-color: var(--woly-shape-text-default);
  --local-shape-color: var(--woly-shape-default);
  --local-border-color: var(--woly-shape-default);
  --local-toast-gap: max(9px, calc(1px * var(--woly-component-level) * var(--woly-main-level)));

  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  min-width: fit-content;
  max-width: 75%;

  color: var(--local-text-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  background-color: var(--local-shape-color);
  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  &[data-outlined='true'] {
    color: var(--local-shape-color);

    background-color: transparent;

    [data-icon='toast'] {
      svg > path {
        fill: var(--local-shape-color);
      }
    }
  }

  [data-content] {
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
  }

  [data-icon='toast'] {
    --woly-component-level: 0;
    --local-icon-size: var(--woly-line-height);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }

  [data-action] {
    --woly-component-level: 0;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: var(--local-toast-gap);
    }
  }

  &:hover {
    --local-text-color: var(--woly-shape-text-hover);
    --local-border-color: var(--woly-shape-hover);
    --local-shape-color: var(--woly-shape-hover);
  }

  &:focus {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
  }
` as StyledComponent<'div', Record<string, unknown>, ToastProps & Priority>;
