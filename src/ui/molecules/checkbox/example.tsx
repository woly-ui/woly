import * as React from 'react';
import { Checkbox } from 'ui';
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
          text="passport"
          isChecked
          onChange={onPassportClick}
          id="checkbox"
          disabled
        />
        <Checkbox
          text="money"
          isChecked={isMoneyChecked}
          onChange={onMoneyClick}
          id="checkbox2"
        />
        <Checkbox
          text="tickets"
          isChecked={false}
          onChange={onTicketsClick}
          id="checkbox3"
          disabled
        />
      </block.L>
    </Global>
  );
};
