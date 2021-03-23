import * as React from 'react';
import styled from 'styled-components';
import { Global, block } from 'box-styles';
import { Toggle } from 'ui';

export const ToggleExample: React.FC = () => {
  const [sqOne, sqOneClick] = React.useReducer((on) => !on, false);
  const [sqTwo, sqTwoClick] = React.useReducer((on) => !on, true);
  const [roundOne, roundOneClick] = React.useReducer((on) => !on, false);
  const [roundTwo, roundTwoClick] = React.useReducer((on) => !on, true);
  const [labelOne, labelOneClick] = React.useReducer((on) => !on, false);
  const [labelTwo, labelTwoClick] = React.useReducer((on) => !on, true);
  return (
    <Global>
      <AllToggles>
        <ToggleWrapper>
          <Toggle
            isChecked={sqOne}
            onChange={sqOneClick}
            id="sqOne"
            variant="square"
          />
          <Toggle
            isChecked={sqTwo}
            onChange={sqTwoClick}
            id="sqTwo"
            variant="square"
          />
        </ToggleWrapper>
        <ToggleWrapper>
          <Toggle
            isChecked={roundOne}
            onChange={roundOneClick}
            id="roundOne"
            variant="round"
          />
          <Toggle
            isChecked={roundTwo}
            onChange={roundTwoClick}
            id="roundTwo"
            variant="round"
          />
        </ToggleWrapper>
        <ToggleWrapper>
          <Toggle
            isChecked={labelOne}
            onChange={labelOneClick}
            id="labelOne"
            variant="round"
          />
          <Toggle
            isChecked={labelTwo}
            onChange={labelTwoClick}
            id="labelTwo"
            variant="round"
          />
        </ToggleWrapper>
      </AllToggles>
    </Global>
  );
};

export const ToggleWrapper = styled.div`
  padding: 0 40px 0 0;

  & > * {
    padding: 10px 0;
  }
`;

export const AllToggles = styled(block.S)`
  display: flex;
`;
