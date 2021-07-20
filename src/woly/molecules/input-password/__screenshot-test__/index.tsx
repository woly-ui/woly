import React from 'react';
import { Priorities, Sizes, StateMap } from 'lib/state-map';
import { block } from 'lib/block';

import { InputPassword } from '..';

const InputPasswordStateMap = () => {
  return (
    <StateMap
      propVariations={{
        disabled: [true, false],
        size: Sizes,
        priority: Priorities,
      }}
      groupByProp="priority"
      render={({ size, priority, disabled }) => {
        const SizeBlock = block[size];

        return (
          <SizeBlock>
            <InputPassword
              className="input-password-st"
              name="password"
              priority={priority}
              disabled={disabled}
              placeholder="password"
              // eslint-disable-next-line no-console
              onChange={console.log}
              type="text"
            />
          </SizeBlock>
        );
      }}
    />
  );
};

export default InputPasswordStateMap;
