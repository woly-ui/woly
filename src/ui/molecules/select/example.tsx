import * as React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'icons';
import { Global, block } from 'box-styles';

import { Select } from './';

interface SelectOptionProps {
  value: string;
  name: string;
}

const defaultValue: SelectOptionProps = {
  name: 'Toyota',
  value: 'Toyota',
};

const options = [
  { name: 'Toyota', value: 'Toyota' },
  { name: 'Opel', value: 'Opel' },
  { name: 'BMW', value: 'BMW' },
];

export const SelectExample: React.FC = () => {
  const [valueS, setValueS] = React.useState(defaultValue);
  const setSelectedS = (event: React.SyntheticEvent<HTMLElement>) =>
    setValueS({
      value: event.currentTarget.getAttribute('data-value') || '',
      name: event.currentTarget.innerHTML,
    });

  const [valueM, setValueM] = React.useState(defaultValue);
  const setSelectedM = (event: React.SyntheticEvent<HTMLElement>) =>
    setValueM({
      value: event.currentTarget.getAttribute('data-value') || '',
      name: event.currentTarget.innerHTML,
    });

  const [valueL, setValueL] = React.useState(defaultValue);
  const setSelectedL = (event: React.SyntheticEvent<HTMLElement>) =>
    setValueL({
      value: event.currentTarget.getAttribute('data-value') || '',
      name: event.currentTarget.innerHTML,
    });

  return (
    <Global>
      <Selects>
        <block.S>
          <Select
            icon={<ArrowDown />}
            name="selectS"
            onChange={setSelectedS}
            options={options}
            selected={valueS}
            variant="base"
          />
        </block.S>
        <block.M>
          <Select
            icon={<ArrowDown />}
            name="selectM"
            onChange={setSelectedM}
            options={options}
            selected={valueM}
            variant="base"
          />
        </block.M>
        <block.L>
          <Select
            icon={<ArrowDown />}
            name="selectL"
            onChange={setSelectedL}
            options={options}
            selected={valueL}
            variant="base"
          />
        </block.L>
      </Selects>
    </Global>
  );
};

export const ArrowDown = styled(ArrowLeft)`
  transform: rotate(90deg);
`;

export const Selects = styled.div`
  display: flex;

  & > div {
    margin: 0 20px 20px 0;
    max-width: 300px;
  }
`;
