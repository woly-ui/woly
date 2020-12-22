import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * --notification-top
 * --notification-right
 * --notification-bottom
 * --notification-left
 * --font-size
 * --notification-margin
 * --notification-padding
 * --notification-color
 * --notification-background-color
 * --notification-radius
 */

interface NotificationProps {
  className?: string;
  message: React.ReactNode;
  variant?: string;
}

const NotificationBase: React.FC<NotificationProps> = ({
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
  top: var(--notification-top, 24px);
  right: var(--notification-right, 0);
  bottom: var(--notification-bottom, unset);
  left: var(--notification-left, 0);

  font-size: var(--font-size, 1rem);

  div {
    width: fit-content;
    margin: var(--notification-margin, 5px auto);
    padding: var(--notification-padding, 6px 17px);

    color: var(--notification-color, #ffffff);
    text-align: center;

    background-color: var(--notification-background-color, #1a1a23);
    border-radius: var(--notification-radius, 1px);
  }
` as StyledComponent<'div', Record<string, unknown>, NotificationProps>;
