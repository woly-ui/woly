import React from 'react';
import { IconPlus } from 'static/icons';
import { Priorities, Sizes, StateMap } from 'lib/state-map';
import { block } from 'lib/block';

import { Button } from '../index';

const ButtonStateMap = () => {
  return (
    <StateMap
      propVariations={{
        disabled: [true, false],
        icon: [true, false],
        outlined: [true, false],
        size: Sizes,
        priority: Priorities,
      }}
      groupByProp="priority"
      render={({ size, icon, priority, outlined, disabled }) => {
        const SizeBlock = block[size];

        return (
          <SizeBlock>
            <Button
              className="button-st"
              text="button"
              icon={icon ? <IconPlus /> : undefined}
              priority={priority}
              outlined={outlined}
              disabled={disabled}
            />
          </SizeBlock>
        );
      }}
    />
  );
};

export default ButtonStateMap;
