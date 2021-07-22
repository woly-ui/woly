import { Scope, Variable } from '../types';

const CONFIGURABLE_COLORS: Variable[] = [
  {
    displayName: 'Shape (default)',
    name: '--woly-shape-default',
    type: 'color',
  },
  {
    displayName: 'Shape text (default)',
    name: '--woly-shape-text-default',
    type: 'color',
  },
  {
    displayName: 'Shape (disabled)',
    name: '--woly-shape-disabled',
    type: 'color',
  },
  {
    displayName: 'Shape text (disabled)',
    name: '--woly-shape-text-disabled',
    type: 'color',
  },
  {
    displayName: 'Shape (hover)',
    name: '--woly-shape-hover',
    type: 'color',
  },
  {
    displayName: 'Shape text (hover)',
    name: '--woly-shape-text-hover',
    type: 'color',
  },
  {
    displayName: 'Shape (active)',
    name: '--woly-shape-active',
    type: 'color',
  },
  {
    displayName: 'Shape text (active)',
    name: '--woly-shape-text-active',
    type: 'color',
  },
  {
    displayName: 'Canvas (default)',
    name: '--woly-canvas-default',
    type: 'color',
  },
  {
    displayName: 'Canvas text (default)',
    name: '--woly-canvas-text-default',
    type: 'color',
  },
  {
    displayName: 'Canvas (disabled)',
    name: '--woly-canvas-disabled',
    type: 'color',
  },
  {
    displayName: 'Canvas text (disabled)',
    name: '--woly-canvas-text-disabled',
    type: 'color',
  },
  {
    displayName: 'Canvas (hover)',
    name: '--woly-canvas-hover',
    type: 'color',
  },
  {
    displayName: 'Canvas text (hover)',
    name: '--woly-canvas-text-hover',
    type: 'color',
  },
  {
    displayName: 'Canvas (active)',
    name: '--woly-canvas-active',
    type: 'color',
  },
  {
    displayName: 'Canvas text (active)',
    name: '--woly-canvas-text-active',
    type: 'color',
  },
];

export const SCOPES: Scope[] = [
  {
    displayName: 'Priorities: Default',
    selector: `[data-priority='default']`,
    variables: CONFIGURABLE_COLORS,
  },
  {
    displayName: 'Priorities: Primary',
    selector: `[data-priority='primary']`,
    variables: CONFIGURABLE_COLORS,
  },
  {
    displayName: 'Priorities: Secondary',
    selector: `[data-priority='secondary']`,
    variables: CONFIGURABLE_COLORS,
  },
  {
    displayName: 'Priorities: White',
    selector: `[data-priority='white']`,
    variables: CONFIGURABLE_COLORS,
  },
  {
    displayName: 'Priorities: Success',
    selector: `[data-priority='success']`,
    variables: CONFIGURABLE_COLORS,
  },
  {
    displayName: 'Priorities: Danger',
    selector: `[data-priority='danger']`,
    variables: CONFIGURABLE_COLORS,
  },
];
