import * as React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import * as chip from '.';

export default { title: 'Atoms' };

const Icon = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;

  background-color: #cccccc;
  border: 0;
  border-radius: 3px;
  outline: none;
`;

export const chips = () => {
  const content = text('Text', 'Chip');
  const onClick = action('click');
  const onIconClick = action('onIconClick');

  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
         import { chip } from 'woly'

         <chip.Base text="${content}" onClick={onClick} icon={<Icon onClick={onIconClick} />} />
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
            <Cell>Chip with icon</Cell>
            <Preview>
              <chip.Base
                icon={<Icon onClick={onIconClick} />}
                onClick={onClick}
                text={content}
              />
            </Preview>
          </tr>
          <tr>
            <Cell>Chip without icon</Cell>
            <Preview>
              <chip.Base onClick={onClick} text={content} />
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
