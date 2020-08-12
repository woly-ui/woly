const common = {
  scripts: {},
  author: {
    name: 'Sergey Sova',
    email: 'mail@sergeysova.com',
    url: 'https://sova.dev',
  },
  engines: {
    node: '>=8.0.0',
  },
  sideEffects: false,
  contributors: [],
  repository: {
    type: 'git',
    url: 'https://github.com/woly-ui/woly',
    // directory: 'packages/???',
  },
  homepage: 'https://github.com/woly-ui/woly',
  license: 'MIT',
  bugs: {
    url: 'https://github.com/woly-ui/woly/issues',
    email: 'woly@sergeysova.com',
  },
  publishConfig: {
    access: 'public',
  },
};

const keywords = [
  'component',
  'components',
  'design',
  'library',
  'react-component',
  'react',
  'system',
  'ui',
  'woly',
];

const version = {
  woly: '0.1.11',
  calendar: '0.1.0',
};

const cjs = (name) => [`${name}.js`, `${name}.js.map`];
const esm = (name) => [`${name}.mjs`, `${name}.mjs.map`];
const types = (name) => [`${name}.d.ts`];

const getFiles = (name) => [
  'README.md',
  'LICENSE',
  ...cjs(name),
  ...esm(name),
  ...types(name),
];

const dependsPeer = {
  react: '^16.11.0',
  'styled-components': '^5.0.1',
};

const dependsOnWoly = {
  woly: `^${version.woly}`,
};

const getModules = (name) => ({
  main: `${name}.js`,
  module: `${name}.mjs`,
  'jsnext:main': `${name}.mjs`,
  types: `${name}.d.ts`,
  typings: `${name}.d.ts`,
  exports: {
    '.': {
      require: `./${name}.js`,
      default: `./${name}.mjs`,
    },
    [`./${name}.mjs`]: `./${name}.mjs`,
    './package.json': './package.json',
  },
});

const woly = {
  name: 'woly',
  version: version.woly,
  description: 'Exhaustive component library for React',
  ...getModules('woly'),
  files: getFiles('woly'),
  keywords,
  dependencies: {},
  peerDependencies: {
    ...dependsPeer,
  },
  ...common,
};

const calendar = {
  name: '@woly/calendar',
  version: version.calendar,
  description: 'Date and time components for Woly React library',
  ...getModules('calendar'),
  files: getFiles('calendar'),
  keywords: [...keywords, 'calendar', 'date', 'time'],
  dependencies: {},
  peerDependencies: {
    ...dependsPeer,
    ...dependsOnWoly,
  },
  ...common,
};

module.exports = { woly, calendar };
