import * as React from 'react';
import styled from 'styled-components';
import { Global } from 'box-styles';
import { Label } from 'ui';

export const LabelExample: React.FC = () => (
  <Global>
    <div data-cypress="label">
      <Grid>
        <Label variant="base">Base Label</Label>
        <Label variant="danger">Error Label</Label>
      </Grid>
    </div>
  </Global>
);

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
`;
