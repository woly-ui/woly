import * as React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import * as inputPassword from '.';

export default { title: 'Molecules' };

export const inputPasswords = () => {
  const value = text('Value', 'value');
  const onChange = action('onChange');

  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { checkbox } from 'woly'

          <inputPassword.Base name="input" 
                              iconHidden={<IconHidden />}
                              iconOpen={<IconOpen />}
                              value={${value}}  />
          `}
        </pre>
      </div>
      <table>
        <thead>
          <tr key="heading-key">
            <Head>Kind</Head>
            <Head>Preview</Head>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Cell>Checkbox</Cell>
            <Preview>
              <inputPassword.Base
                name="input"
                value={value}
                onChange={onChange}
              />
            </Preview>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Cell = styled.td`
  padding: 1rem;

  font-size: 1rem;
`;

const Head = styled(Cell)`
  font-weight: bold;
`;

const Preview = styled(Cell)`
  padding: 2rem;

  border: 1px dashed var(--borders, rgb(200, 200, 200));
`;
