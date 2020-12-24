import * as React from 'react';
import styled from 'styled-components';

import { Checkbox, Label } from '../..';
import { Global } from '../../../lib/box-styles';

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
    <Global>
      Travel packing checklist:
      <Checkboxes>
        <Checkbox
          label={<Label text="passport" />}
          isChecked={isPassportChecked}
          onChange={onPassportClick}
          id="checkbox"
        />
        <Checkbox
          label={<Label text="money" />}
          isChecked={isMoneyChecked}
          onChange={onMoneyClick}
          id="checkbox"
        />
        <Checkbox
          label={<Label text="tickets" />}
          isChecked={isTicketsChecked}
          onChange={onTicketsClick}
          id="checkbox"
        />
      </Checkboxes>
    </Global>
  );
};

export const Checkboxes = styled.div`
  padding-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
