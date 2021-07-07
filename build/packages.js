const versions = require('../versions.json');

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

const cjs = (name) => [`${name}.js`, `${name}.js.map`];
const esm = (name) => [`${name}.mjs`, `${name}.mjs.map`];
const types = (name) => [`${name}.d.ts`];

const getFiles = (name) => ['README.md', 'LICENSE', ...cjs(name), ...esm(name), ...types(name)];

const getRepo = (name) => ({
  type: 'git',
  url: 'https://github.com/woly-ui/woly',
  directory: `packages/${name}`,
});

const dependsPeer = {
  react: '^16.11.0',
  'styled-components': '^5.0.1',
};

const dependsOnWoly = {
  woly: `^${versions.woly}`,
};

const getModules = (name) => ({
  main: `${name}.js`,
  // module: `${name}.mjs`,
  // 'jsnext:main': `${name}.mjs`,
  types: `${name}.d.ts`,
  typings: `${name}.d.ts`,
  // exports: {
  //   '.': {
  //     require: `./${name}.js`,
  //     default: `./${name}.mjs`,
  //   },
  //   [`./${name}.mjs`]: `./${name}.mjs`,
  //   './package.json': './package.json',
  // },
});

const woly = {
  name: 'woly',
  version: versions.woly,
  description: 'Exhaustive component library for React',
  ...getModules('woly'),
  files: getFiles('woly'),
  keywords,
  dependencies: {},
  peerDependencies: {
    ...dependsPeer,
  },
  repository: getRepo('woly'),
  ...common,
};

const calendar = {
  name: '@woly/calendar',
  version: versions.calendar,
  description: 'Date and time components for Woly React library',
  ...getModules('calendar'),
  files: getFiles('calendar'),
  keywords: [...keywords, 'calendar', 'date', 'time'],
  dependencies: {},
  peerDependencies: {
    ...dependsPeer,
    ...dependsOnWoly,
  },
  repository: getRepo('calendar'),
  ...common,
};

const upload = {
  name: '@woly/upload',
  version: versions.upload,
  description: 'Upload components for Woly React library',
  ...getModules('upload'),
  files: getFiles('upload'),
  keywords: [...keywords, 'upload'],
  dependencies: {},
  peerDependencies: {
    ...dependsPeer,
    ...dependsOnWoly,
  },
  repository: getRepo('upload'),
  ...common,
};

module.exports = { woly, calendar, upload };
