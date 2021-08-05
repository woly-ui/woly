/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Playground } from 'dev/playground';

export const PaletteExample = () => {
  return (
    <Playground>
      <Wrapper>
        <table>
          <tr>
            <th />
            <th scope="col">Shape Default</th>
            <th scope="col">Shape Disabled</th>
            <th scope="col">Shape Hover</th>
            <th scope="col">Shape Active</th>
            <th scope="col">Shape Text Default</th>
            <th scope="col">Shape Text Disabled</th>
            <th scope="col">Shape Text Hover</th>
            <th scope="col">Shape Text Active</th>
            <th scope="col">Canvas Default</th>
            <th scope="col">Canvas Disabled</th>
            <th scope="col">Canvas Hover</th>
            <th scope="col">Canvas Active</th>
            <th scope="col">Canvas Text Default</th>
            <th scope="col">Canvas Text Disabled</th>
            <th scope="col">Canvas Text Hover</th>
            <th scope="col">Canvas Text Active</th>
          </tr>
          <PaletteRow name="default" />
          <PaletteRow name="white" />
          <PaletteRow name="primary" />
          <PaletteRow name="secondary" />
          <PaletteRow name="danger" />
          <PaletteRow name="success" />
        </table>
      </Wrapper>
    </Playground>
  );
};

const PaletteRow = ({ name }: { name: string }) => (
  <tr data-priority={name}>
    <th scope="row">{name.charAt(0).toLowerCase() + name.slice(1)}</th>
    <td style={{ backgroundColor: 'var(--woly-shape-default)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-disabled)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-hover)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-active)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-text-default)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-text-disabled)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-text-hover)' }} />
    <td style={{ backgroundColor: 'var(--woly-shape-text-active)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-default)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-disabled)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-hover)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-active)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-text-default)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-text-disabled)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-text-hover)' }} />
    <td style={{ backgroundColor: 'var(--woly-canvas-text-active)' }} />
  </tr>
);

const Wrapper = styled.div`
  position: relative;

  td {
    width: 200px;
    height: 50px;
  }
`;
