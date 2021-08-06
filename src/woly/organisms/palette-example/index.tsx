/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { ButtonIcon } from 'ui';
import { IconSearch } from 'static/icons';
import { Playground } from 'dev/playground';
import { PriorityWeightMap } from 'dev/maps/priority-weight-map';

export const Palettes = () => {
  return (
    <Playground>
      <Table>
        <tr>
          <th />
          <th scope="col">0</th>
          <th scope="col">100</th>
          <th scope="col">200</th>
          <th scope="col">300</th>
          <th scope="col">400</th>
          <th scope="col">500</th>
          <th scope="col">600</th>
          <th scope="col">700</th>
          <th scope="col">800</th>
          <th scope="col">900</th>
          <th scope="col">1000</th>
        </tr>
        <PaletteRow name="bw" />
        <PaletteRow name="primary" />
        <PaletteRow name="secondary" />
        <PaletteRow name="accent" />
        <PaletteRow name="danger" />
        <PaletteRow name="success" />
      </Table>
    </Playground>
  );
};

export const PriorityVariables = () => {
  return (
    <Playground>
      <Table>
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
        <PriorityRow name="default" />
        <PriorityRow name="white" />
        <PriorityRow name="primary" />
        <PriorityRow name="secondary" />
        <PriorityRow name="danger" />
        <PriorityRow name="success" />
      </Table>
    </Playground>
  );
};

const PaletteRow = ({ name }: { name: string }) => (
  <tr>
    <th scope="row">{name.charAt(0).toLowerCase() + name.slice(1)}</th>
    {Array.from({ length: 11 }).map((value, index) => {
      return (
        <td key={index} style={{ backgroundColor: `hsla(var(--${name}-${index * 100}), 1)` }} />
      );
    })}
  </tr>
);

const PriorityRow = ({ name }: { name: string }) => (
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

const Table = styled.table`
  position: relative;

  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");

  td {
    width: 200px;
    height: 50px;
  }
`;

export const ButtonIconWeightPriorityWeight = () => (
  <PriorityWeightMap
    weights={['fill', 'outline', 'goast', 'transparent']}
    render={({ weight, priority, disabled }) => (
      <ButtonIcon
        icon={<IconSearch />}
        onClick={() => console.info('ButtonIcon clicked')}
        weight={weight}
        priority={priority}
        disabled={disabled}
      />
    )}
  />
);
