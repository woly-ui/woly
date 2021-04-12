import * as React from 'react';
import styled from 'styled-components';
import { Button, Notification } from 'ui';
import { Global, block } from 'box-styles';

export const NotificationExample: React.FC = () => {
  const [isVisible, onClick] = React.useReducer((is) => !is, false);
  return (
    <Global>
      <block.S>
        <Button
          onClick={onClick}
          text={isVisible ? 'hide notification' : 'show notification'}
          variant="primary"
        />
      </block.S>
      <NotificationWrapper isVisible={isVisible}>
        <Notification message="Your transaction has been completed" variant="base" />
      </NotificationWrapper>
    </Global>
  );
};

export const NotificationWrapper = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
