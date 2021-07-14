import * as React from 'react';
import styled from 'styled-components';

import { Button, Checkbox, ListContainer, Popover, Surface } from '../../index';
import { IconArrowDown } from '../../../static/icons';
import { box } from '../../elements/box';

interface Option {
  name: string;
  value: string;
}

interface FilterProps {
  options: Option[];
  title: React.ReactNode | string;
}

export const Filter: React.FC<FilterProps> = ({ options, title }) => {
  const [isOpen, setOpen] = React.useReducer((is) => !is, false);
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

  const createCheckHandler = (value: string) => () =>
    setCheckedItems((current) => {
      if (current.includes(value)) return current.filter((item) => item !== value);
      return current.concat(value);
    });

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
                  onChange={createCheckHandler(value)}
                  priority="primary"
                  checked={checkedItems.includes(value)}
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
