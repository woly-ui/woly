import React from 'react';
import styled from 'styled-components';
import { Global } from 'dev/global';
import { Grid, Heading } from 'ui';

import { createCombinations } from './common/combination';
import { groupByKey } from './common/group-by-key';

export const priorities = ['default', 'primary', 'secondary', 'white', 'danger', 'success'];

interface ThemeProps {
  weight: string;
  priority: string;
  disabled: boolean;
}

interface PriorityWeightMapProps {
  weights: ('fill' | 'outline' | 'goast' | 'transparent')[];
  render: (props: ThemeProps) => React.ReactElement;
}

export const PriorityWeightMap = ({ weights, render }: PriorityWeightMapProps) => {
  const allCombinations = createCombinations({
    weight: weights,
    priority: priorities,
    disabled: [true, false],
  });

  if (Object.keys(allCombinations).length === 0) return null;

  return (
    <Wrapper>
      {Object.entries(groupByKey(allCombinations, 'priority')).map(
        ([priority, combinations], index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <PriorityGroup key={index}>
              <Header>{priority}</Header>
              <GridTemplate columns={weights.length + 1}>
                <div /> {/* plug to make empty space at top left corner */}
                {weights.map((weight, index) => (
                  <Centered key={index}>
                    <b>{weight}</b>
                  </Centered>
                ))}
                {Object.entries(
                  groupByKey(combinations, 'disabled', (key) => (key ? 'normal' : 'disable')),
                ).map(([state, variations], index) => {
                  return (
                    <React.Fragment key={index}>
                      <Centered>
                        <b>{state}</b>
                      </Centered>
                      {variations.map((variation, index) => {
                        const { disabled, ...props } = variation as ThemeProps;

                        return (
                          <VariantCell key={index}>
                            {render({ ...props, disabled: state === 'disable' })}
                          </VariantCell>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </GridTemplate>
            </PriorityGroup>
          );
        },
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Global)`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
`;

const PriorityGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const VariantCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 20px;
`;

const Header = styled(Heading)`
  padding-bottom: 15px;
  padding-left: 5px;
`;

const GridTemplate = styled(Grid)`
  gap: 10px;

  color: #c4c4c4;
  white-space: pre-line;
`;

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
