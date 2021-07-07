import React from 'react';
import styled from 'styled-components';

import { ColorInput } from '../inputs/color';
import { InputProps } from '../inputs/types';
import { Scope, Variable, VariableType } from '../types';
import { useCssVariable } from '../stylesheet';

interface Props {
  scope: Scope;
  variable: Variable;
}

export const VariableField: React.FC<Props> = ({ scope, variable }) => {
  const [value, setValue] = useCssVariable({
    configurator: 'color',
    selector: scope.selector,
    variable: variable.name,
  });

  if (!value) return null;
  const Input = mapTypeToInput[variable.type];

  return (
    <VariableWrapper>
      <Input value={value} onChange={setValue} />
      <VariableName>{variable.displayName}</VariableName>
    </VariableWrapper>
  );
};

const mapTypeToInput: Record<VariableType, React.FC<InputProps>> = {
  color: ColorInput,
};

const VariableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const VariableName = styled.span`
  display: inline-block;
  margin-left: 16px;
  font-size: 14px;
`;
