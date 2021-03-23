import * as React from 'react';
import { Checkbox } from 'ui';
import { Global, block } from 'box-styles';
import { CheckIcon } from 'icons';

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
          icon={<CheckIcon />}
          disabled
        />
        <Checkbox
          text="money"
          isChecked={isMoneyChecked}
          onChange={onMoneyClick}
          id="checkbox2"
          icon={<CheckIcon />}
        />
        <Checkbox
          text="tickets"
          isChecked={false}
          onChange={onTicketsClick}
          id="checkbox3"
          icon={<CheckIcon />}
          disabled
        />
      </block.L>
    </Global>
  );
};
