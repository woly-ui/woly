import * as React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

import * as woly from '.';

export default { title: 'Atoms' };

const noop = () => {};

const Global = styled.div`
  --main-level: 3;
  --const-m: 6px;
`;

const Small = styled.div`
  --component-level: 2;
  padding: 10px 0;
`;

const Medium = styled.div`
  --component-level: 3;
  padding: 10px 0;
`;

const Large = styled.div`
  padding: 10px 0;
  --component-level: 4;
`;

export const Input = () => (
  <Global>
    <Small>
      <woly.Base
        type="text"
        name={text('Input name', 'name')}
        placeholder={text('Placeholder', 'Enter your name here')}
        value={text('Value', 'full name')}
        onChange={noop}
      />
    </Small>
    <Medium>
      <woly.Base
        type="text"
        name={text('Input name', 'name')}
        placeholder={text('Placeholder', 'Enter your name here')}
        value={text('Value', 'full name')}
        onChange={noop}
      />
    </Medium>
    <Large>
      <woly.Base
        type="text"
        name={text('Input name', 'name')}
        placeholder={text('Placeholder', 'Enter your name here')}
        value={text('Value', 'full name')}
        onChange={noop}
      />
    </Large>
  </Global>
);
