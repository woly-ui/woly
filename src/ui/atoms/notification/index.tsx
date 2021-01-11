import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-notification-top
 * --woly-notification-right
 * --woly-notification-bottom
 * --woly-notification-left
 * --woly-font-size
 * --woly-notification-margin
 * --woly-notification-padding
 *
 * --woly-rounding
 * --woly-background
 * --woly-color
 * --woly-border
 * --woly-border-width
 */

interface NotificationProps {
  className?: string;
  message: React.ReactNode;
}

const NotificationBase: React.FC<NotificationProps & Variant> = ({
  className,
  message,
  variant = 'default',
}) => (
  <div className={className} data-variant={variant}>
    <div>{message}</div>
  </div>
);

export const Notification = styled(NotificationBase)`
  position: fixed;
  top: var(--woly-notification-top, 24px);
  right: var(--woly-notification-right, 0);
  bottom: var(--woly-notification-bottom, unset);
  left: var(--woly-notification-left, 0);

  font-size: var(--woly-font-size, 1rem);

  div {
    width: fit-content;
    margin: var(--woly-notification-margin, 5px auto);
    padding: var(--woly-notification-padding, 6px 17px);

    color: var(--woly-color, #ffffff);
    text-align: center;

    background-color: var(--woly-background, #1a1a23);
    border-color: var(--woly-border, var(--woly-background, #1a1a23));
    border-style: solid;
    border-width: var(--woly-border-width, 0);
    border-radius: var(--woly-rounding, 1px);
  }
` as StyledComponent<
  'div',
  Record<string, unknown>,
  NotificationProps & Variant
>;
