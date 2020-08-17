import * as React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import * as label from '../../atoms/label';
import * as toggle from '.';

export default { title: 'Molecules' };

export const toggles = () => {
  const onChange = action('onChange');
  const labelText = text('Label', 'Label');
  const isChecked = boolean('Toggle', false);
  const isCheckedLabel = boolean('Toggle with label', true);
  const Label = <label.Primary text={labelText} />;

  return (
    <>
      <div>
        <pre style={{ fontSize: '1rem' }}>
          {`
          import { toggle } from 'woly'

          <toggle.Base label="label" onChange={onChange} isChecked={isChecked} id="toggle-id" />
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
            <Cell>Primary without label</Cell>
            <Preview>
              <toggle.Base
                onChange={onChange}
                isChecked={isChecked}
                id="toggle-primary"
              />
            </Preview>
          </tr>
          <tr>
            <Cell>Primary with label</Cell>
            <Preview>
              <toggle.Base
                onChange={onChange}
                isChecked={isCheckedLabel}
                id="toggle-primary-label"
                label={Label}
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
