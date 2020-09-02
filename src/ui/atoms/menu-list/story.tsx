import * as React from 'react';
import styled from 'styled-components';
import { array } from '@storybook/addon-knobs';

import * as menuList from '.';

export default { title: 'Atoms' };

export const menuLists = () => {
  const defaultValue = ['Red', 'Blue'];
  const value = array('Colors', defaultValue);
  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { label } from 'woly'

          <menuLists.Base text={[${value}]} />
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
              <menuList.Base menu={value} />
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
