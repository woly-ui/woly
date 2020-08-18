import * as React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

import * as label from '.';

export default { title: 'Atoms' };

export const labels = () => {
  const content = text('Text', 'Label');
  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { label } from 'woly'

          <label.Primary text="${content}" />
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
            <Cell>Primary</Cell>
            <Preview>
              <label.Primary text={content} />
            </Preview>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Cell = styled.td`
  font-size: 1rem;
  padding: 1rem;
`;

const Head = styled(Cell)`
  font-weight: bold;
`;

const Preview = styled(Cell)`
  padding: 2rem;
  border: 1px dashed var(--borders, rgb(200, 200, 200));
`;
