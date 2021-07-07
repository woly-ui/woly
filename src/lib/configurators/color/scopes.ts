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
    displayName: 'Priorities: Tertiary',
    selector: `[data-priority='tertiary']`,
    variables: CONFIGURABLE_COLORS,
  },
  {
    displayName: 'Priorities: Danger',
    selector: `[data-priority='danger']`,
    variables: CONFIGURABLE_COLORS,
  },
];
