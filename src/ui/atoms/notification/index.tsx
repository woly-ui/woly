import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

interface NotificationProps {
  className?: string;
  message: React.ReactNode;
}

const NotificationBase: React.FC<NotificationProps & Variant> = ({
  className,
  message,
  variant = 'secondary',
}) => (
  <div className={className} data-variant={variant}>
    <div>{message}</div>
  </div>
);

export const Notification = styled(NotificationBase)`
  --local-text-color: var(--woly-shape-text-default);
  --local-background: var(--woly-shape-default);
  --local-border-color: var(--woly-shape-default);

  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-position-top: 24px;
  --local-position-right: 0;
  --local-position-bottom: unset;
  --local-position-top: 0;

  position: fixed;
  top: var(--local-position-top);
  right: var(--local-position-right);
  bottom: var(--local-position-bottom);
  left: var(--local-position-left);

  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 24px);

  div {
    width: fit-content;
    padding: var(--local-vertical) var(--local-horizontal);

    color: var(--local-text-color);
    text-align: center;

    background-color: var(--local-background);
    border: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--woly-rounding);
  }
` as StyledComponent<'div', Record<string, unknown>, NotificationProps & Variant>;
