import * as React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import * as checkbox from '.';
import * as label from '../../atoms/label';

export default { title: 'Molecules' };

export const checkboxes = () => {
  const labelText = text('Label', 'Label');
  const Label = <label.Primary text={labelText} />;
  const isChecked = boolean('Checked', false);
  const onChange = action('onChange');

  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { checkbox } from 'woly'

          <checkbox.Base label="${labelText}" />
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
              <checkbox.Base
                isChecked={isChecked}
                onChange={onChange}
                id="checkbox"
              />
            </Preview>
          </tr>
          <tr>
            <Cell>Checkbox with label</Cell>
            <Preview>
              <checkbox.Base
                label={Label}
                isChecked={isChecked}
                onChange={onChange}
                id="checkbox"
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
