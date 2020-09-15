import * as React from 'react';
import styled from 'styled-components';

import * as inputPassword from '.';

export const InputPasswordExample: React.FC = () => (
  <inputPassword.Base
    onChange={() => console.info('change')}
    name="input"
    iconHidden={<ToggleButton>🙉</ToggleButton>}
    iconOpen={<ToggleButton>🙈</ToggleButton>}
  />
);

export const ToggleButton = styled.div`
  font-size: 30px;
`;
