import React from 'react';
import { IconClose } from 'static/icons';
import { Priorities, Sizes, StateMap } from 'dev/state-map';
import { block } from 'dev/block';

import { ButtonIcon } from '../../button-icon';
import { Chip } from '..';

const ChipStateMap = () => {
  return (
    <StateMap
      propVariations={{
        disabled: [true, false],
        outlined: [true, false],
        size: Sizes,
        priority: Priorities,
      }}
      groupByProp="priority"
      render={({ size, priority, disabled }) => {
        const SizeBlock = block[size];

        return (
          <SizeBlock>
            <Chip
              className="chip-st"
              priority={priority}
              disabled={disabled}
              text="Chip"
              rightIcon={
                <ButtonIcon
                  disabled={disabled}
                  icon={<IconClose />}
                  onClick={() => console.info('IconClose clicked')}
                  priority="primary"
                />
              }
            />
          </SizeBlock>
        );
      }}
    />
  );
};

export default ChipStateMap;
