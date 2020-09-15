import * as React from 'react';
import styled from 'styled-components';

import { label, toggle } from '../..';

export const ToggleExample: React.FC = () => {
  const [isConfirmOn, onConfirmClick] = React.useReducer((on) => !on, false);
  const [isSubscribeOn, onSubscribeClick] = React.useReducer((on) => !on, true);

  return (
    <ToggleWrapper>
      <Toggle
        label={<Label text="Confirm" />}
        isChecked={isConfirmOn}
        onChange={onConfirmClick}
        id="toggleConfirm"
      />
      <Toggle
        label={<Label text="Subscribe" />}
        isChecked={isSubscribeOn}
        onChange={onSubscribeClick}
        id="toggleSubscribe"
      />
    </ToggleWrapper>
  );
};

const Toggle = styled(toggle.Base)`
  --toggle-active-background-color: var(--accent);
`;

export const ToggleWrapper = styled.div`
  padding: 40px 0;
`;

export const Label = styled(label.Primary)`
  --padding: 15px 0;
`;
