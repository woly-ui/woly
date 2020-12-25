import * as React from 'react';
import styled from 'styled-components';
import { Global } from 'box-styles';
import { Label, Toggle } from 'ui';

export const ToggleExample: React.FC = () => {
  const [isConfirmOn, onConfirmClick] = React.useReducer((on) => !on, false);
  const [isSubscribeOn, onSubscribeClick] = React.useReducer((on) => !on, true);

  return (
    <Global>
      <ToggleWrapper>
        <Toggle
          label={<Label text="Confirm" />}
          isChecked={isConfirmOn}
          onChange={onConfirmClick}
          id="toggleConfirm"
          variant="primary"
        />
        <Toggle
          label={<Label text="Subscribe" />}
          isChecked={isSubscribeOn}
          onChange={onSubscribeClick}
          id="toggleSubscribe"
          variant="primary"
        />
      </ToggleWrapper>
    </Global>
  );
};

export const ToggleWrapper = styled.div`
  padding: 40px 0;
`;
