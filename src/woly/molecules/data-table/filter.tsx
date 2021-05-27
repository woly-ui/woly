import * as React from 'react';
import styled from 'styled-components';

import { Button, Checkbox, ListContainer, Popover, Surface } from '../../index';
import { IconArrowDown } from '../../../static/icons';
import { box } from '../../elements/box';

interface RangeProps {
  value: {
    from: number;
    to: number;
  };
  placeholder: string;
}

interface FilterProps {
  options: Array<Record<string, string>>;
  title: string;
}

export const RangeCell: React.FC<RangeProps> = ({ value, placeholder }) => (
  <span>
    from {value.from || placeholder} to {value.to || placeholder}
  </span>
);

export const Filter: React.FC<FilterProps> = ({ options, title }) => {
  const [isOpen, setOpen] = React.useReducer((is) => !is, false);
  const [isChecked, setChecked] = React.useReducer((is) => !is, false);
  if (options.length === 0) {
    console.log('No options are passed to filter');
    return null;
  }

  return (
    <FilterBlock>
      <Popover
        isOpen={isOpen}
        content={
          <ListContainer>
            <Dropdown>
              {options.map(({ name, value }) => (
                <Checkbox
                  id={value}
                  key={value}
                  text={name}
                  onChange={setChecked}
                  priority="primary"
                  checked={isChecked}
                />
              ))}
              <Button priority="primary" outlined text="Применить" />
            </Dropdown>
          </ListContainer>
        }
      >
        <FilterButton onClick={setOpen}>
          <div data-text>{title}</div>
          <div data-icon>
            <IconArrowDown />
          </div>
        </FilterButton>
      </Popover>
    </FilterBlock>
  );
};

const Dropdown = styled(Surface)`
  position: absolute;

  display: flex;
  flex-direction: column;
  width: 100%;

  font-weight: normal;
`;

const FilterBlock = styled.div`
  position: relative;
`;

const FilterButton = styled.div`
  ${box}

  display: flex;
  align-items: center;
  box-sizing: border-box;

  background: var(--woly-shape-text-default);

  border: var(--woly-border-width) solid var(--woly-canvas-default);

  cursor: pointer;

  [data-icon] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    svg > path {
      fill: var(--woly-canvas-text-disabled);
    }
  }
`;
