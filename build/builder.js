const { babel } = require('@rollup/plugin-babel');
const { rollup } = require('rollup');
const { sizeSnapshot } = require('rollup-plugin-size-snapshot');
const { terser } = require('rollup-plugin-terser');
const alias = require('@rollup/plugin-alias');
const analyze = require('rollup-plugin-visualizer');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');

const { directory } = require('./library');
const babelConfig = require('./babel');

const compatTarget = {
  browsers: [
    'Chrome 47',
    'last 2 Firefox versions',
    'last 2 Safari versions',
    'last 2 Edge versions',
    'IE 11',
  ],
};

const externals = [
  '@woly/calendar',
  'react-dom',
  'react',
  'styled-components',
  'woly',
];

const extensions = ['.js', '.mjs', '.ts', '.tsx'];

function getPlugins(name, { isEsm = false } = {}) {
  return {
    babel: isEsm
      ? babel({
          babelHelpers: 'bundled',
          extensions,
          skipPreflightCheck: true,
          exclude: /node_modules.*/,
          babelrc: false,
          ...babelConfig(),
        })
      : babel({
          babelHelpers: 'bundled',
        }),
  };
}

function onwarn(warning, rollupWarn) {
  if (
    warning.code !== 'CIRCULAR_DEPENDENCY' &&
    warning.code !== 'NON_EXISTENT_EXPORT'
  ) {
    rollupWarn(warning);
  }
}
