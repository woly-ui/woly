import * as React from 'react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import * as button from '.';

export default { title: 'Atoms' };

const Global = styled.div`
  --const-m: 6px;

  --main-level: 3;
`;

const Block = styled.div`
  & > * + * {
    --gap: calc(
      (1px * var(--main-level)) +
        (1px * var(--main-level) * var(--component-level))
    );
    margin-top: var(--gap, 1rem);
  }
`;

const N = styled(Block)`
  --component-level: 0;
`;

const XS = styled(Block)`
  --component-level: 1;
`;

const S = styled(Block)`
  --component-level: 2;
`;

const M = styled(Block)`
  --component-level: 3;
`;

const L = styled(Block)`
  --component-level: 4;
`;

const XL = styled(Block)`
  --component-level: 5;
`;

const H = styled(Block)`
  --component-level: 6;
`;

const block = { N, XS, S, M, L, XL, H };

const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: white;
`;

export const modular = () => (
  <Global>
    <block.L>
      <button.Primary left={<Icon />} text="Button L" />
      <block.M>
        <button.Primary left={<Icon />} right={<Icon />} text="Button M" />
      </block.M>
      <block.M>
        <button.Primary left={<Icon />} text="Button M" />
        <block.XS>
          <button.Primary right={<Icon />} text="Button XS" />
        </block.XS>
        <block.N>
          <button.Primary right={<Icon />} text="Button N" />
        </block.N>
        <block.N>
          <button.Primary right={<Icon />} text="Button N" />
        </block.N>
        <block.N>
          <button.Primary right={<Icon />} text="Button N" />
        </block.N>
        <block.N>
          <button.Primary right={<Icon />} text="Button N" />
        </block.N>
      </block.M>
    </block.L>
  </Global>
);

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
