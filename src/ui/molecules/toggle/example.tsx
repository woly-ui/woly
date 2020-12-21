import * as React from 'react';
import styled from 'styled-components';

import { Label, Toggle } from '../..';

export const ToggleExample: React.FC = () => {
  const [isConfirmOn, onConfirmClick] = React.useReducer((on) => !on, false);
  const [isSubscribeOn, onSubscribeClick] = React.useReducer((on) => !on, true);

  return (
    <ToggleWrapper>
      <TogglePrimary
        label={<LabelBase text="Confirm" />}
        isChecked={isConfirmOn}
        onChange={onConfirmClick}
        id="toggleConfirm"
      />
      <TogglePrimary
        label={<LabelBase text="Subscribe" />}
        isChecked={isSubscribeOn}
        onChange={onSubscribeClick}
        id="toggleSubscribe"
      />
    </ToggleWrapper>
  );
};

const TogglePrimary = styled(Toggle)`
  --toggle-active-background-color: var(--accent);
`;

export const ToggleWrapper = styled.div`
  padding: 40px 0;
`;

const LabelBase = styled(Label)`
  --padding: 15px 0;
`;
