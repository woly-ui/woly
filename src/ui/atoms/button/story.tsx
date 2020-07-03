import * as React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import * as button from '.';

export default { title: 'Atoms' };

export const buttons = () => {
  const content = text('Text', 'Sign In');
  const onClick = action('click');

  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { button } from 'woly'

          <button.Primary text="${content}" />
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
              <button.Primary onClick={onClick} text={content} />
            </Preview>
          </tr>
          <tr>
            <Cell>Secondary</Cell>
            <Preview>
              <button.Secondary onClick={onClick} text={content} />
            </Preview>
          </tr>
          <tr>
            <Cell>Destructive</Cell>
            <Preview>
              <button.Destructive onClick={onClick} text={content} />
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
