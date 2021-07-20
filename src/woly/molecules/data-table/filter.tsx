import * as React from 'react';
import styled from 'styled-components';
import { IconArrowDown } from 'static/icons';
import { box } from 'ui/elements/box';

import { Button, Checkbox, ListContainer, Popover, Surface } from '../../index';

interface Option {
  name: string;
  value: string;
}

interface FilterProps {
  title: React.ReactNode | string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
}

export const Filter: React.FC<FilterProps> = ({
  title,
  options,
  value: checkedValues,
  onChange,
}) => {
  const [isOpen, setOpen] = React.useReducer((is) => !is, false);

  const getUpdatedValue = (value: string) => {
    if (checkedValues.includes(value)) {
      // remove
      return checkedValues.filter((item) => item !== value);
    }

    // add
    return checkedValues.concat(value);
  };

  const createCheckHandler = (item: string) => {
    return () => onChange(getUpdatedValue(item));
  };

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
                  checked={checkedValues.includes(value)}
                  onChange={createCheckHandler(value)}
                  priority="primary"
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
