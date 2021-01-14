import * as React from 'react';
import styled from 'styled-components';
import { Checkbox, Label } from 'ui';
import { Global, block } from 'box-styles';

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
      <block.L>
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
          id="checkbox2"
        />
        <Checkbox
          label={<Label text="tickets" />}
          isChecked={isTicketsChecked}
          onChange={onTicketsClick}
          id="checkbox3"
        />
      </block.L>
    </Global>
  );
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
