import * as React from 'react';
import styled from 'styled-components';

import { Global, block } from '../../../lib/box-styles';
import { button, notification } from '../index';

export const NotificationExample: React.FC = () => {
  const [isVisible, onClick] = React.useReducer((is) => !is, false);
  return (
    <Global>
      <block.S>
        <button.Primary
          onClick={onClick}
          text={isVisible ? 'hide notification' : 'show notification'}
        />
      </block.S>
      <NotificationWrapper isVisible={isVisible}>
        <notification.Base message="Your transaction has been completed" />
      </NotificationWrapper>
    </Global>
  );
};

export const NotificationWrapper = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
