import * as React from 'react';
import styled from 'styled-components';

import { Checkbox, Label } from '../..';

export const CheckboxExample: React.FC = () => {
  const [isPassportChecked, onPassportClick] = React.useReducer(
    (ch) => !ch,
    true,
  );
  const [isMoneyChecked, onMoneyClick] = React.useReducer((ch) => !ch, false);
  const [isTicketsChecked, onTicketsClick] = React.useReducer(
    (ch) => !ch,
    false,
  );

  return (
    <>
      Travel packing checklist:
      <Checkboxes>
        <CheckboxPrimary
          label={<Label text="passport" />}
          isChecked={isPassportChecked}
          onChange={onPassportClick}
          id="checkbox"
        />
        <CheckboxPrimary
          label={<Label text="money" />}
          isChecked={isMoneyChecked}
          onChange={onMoneyClick}
          id="checkbox"
        />
        <CheckboxPrimary
          label={<Label text="tickets" />}
          isChecked={isTicketsChecked}
          onChange={onTicketsClick}
          id="checkbox"
        />
      </Checkboxes>
    </>
  );
};

export const Checkboxes = styled.div`
  padding-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  --const-m: 6px;
  --main-level: 3;
`;
export const ButtonWrapper = styled.div`
  max-width: 300px;
  padding-top: 30px;
  --primary-bg: #6ab547;
  --component-level: 2;
`;

const CheckboxPrimary = styled(Checkbox)`
  --padding: 5px;
`;
