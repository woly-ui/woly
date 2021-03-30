const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { rollup } = require('rollup');
// const { sizeSnapshot } = require('rollup-plugin-size-snapshot');
const { terser } = require('rollup-plugin-terser');
const alias = require('@rollup/plugin-alias');
// const analyze = require('rollup-plugin-visualizer');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const typescript = require('@wessberg/rollup-plugin-ts');
const reactSvg = require('rollup-plugin-react-svg');

const { directory } = require('./library');
const babelConfig = require('./babel');
const { minifyConfig } = require('./minification');

function buildWoly() {
  const name = 'woly';

  return Promise.all([
    createEsCjs(name, {
      dir: directory(`dist/${name}`),
      file: {
        cjs: `${name}.js`,
        // es: `${name}.mjs`,
      },
      inputExtension: 'ts',
    }),
  ]);
}

function buildCalendar() {
  const name = 'calendar';

  return Promise.all([
    createEsCjs(name, {
      dir: directory(`dist/${name}`),
      file: {
        cjs: `${name}.js`,
        // es: `${name}.mjs`,
      },
      inputExtension: 'ts',
    }),
  ]);
}

module.exports = { buildWoly, buildCalendar };

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
          extensions,
          babelrc: false,
          ...babelConfig(),
        }),
    commonjs: commonjs({ extensions }),
    resolve: nodeResolve({ extensions }),
    // sizeSnapshot: sizeSnapshot({ printInfo: false }),
    // analyzer: analyze({
    //   filename: `stats/${name}.html`,
    //   title: `${name} size report`,
    //   sourcemap: true,
    //   template: 'treemap',
    // }),
    // analyzerJson: analyze({
    //   sourcemap: true,
    //   json: true,
    //   filename: `stats/${name}.json`,
    // }),
    terser: terser(
      minifyConfig({
        beautify: Boolean(process.env.PRETTIFY),
        inline: !name.endsWith('.umd'),
      }),
    ),
    json: json({ preferConst: true, indent: '  ' }),
    alias: alias({
      entries: {
        woly: directory('src/woly'),
      },
    }),
    typescript: typescript({ tsconfig: 'tsconfig.json' }),
    reactSvg: reactSvg(),
  };
}

async function createEsCjs(
  name,
  { dir, file: { es, cjs }, input = 'index', inputExtension = 'js' },
) {
  const cjsPlugins = getPlugins(input === 'index' ? name : input);
  const cjsList = [
    cjsPlugins.resolve,
    cjsPlugins.json,
    cjsPlugins.babel,
    cjsPlugins.reactSvg,
    cjsPlugins.terser,
    // cjsPlugins.sizeSnapshot,
    // cjsPlugins.analyzer,
    // cjsPlugins.analyzerJson,
  ];

  const esmPlugins = getPlugins(input === 'index' ? name : input, {
    isEsm: true,
  });
  const esmList = [
    esmPlugins.resolve,
    esmPlugins.json,
    esmPlugins.typescript,
    cjsPlugins.reactSvg,
    esmPlugins.babel,
    esmPlugins.terser,
    // esmPlugins.sizeSnapshot,
    // esmPlugins.analyzer,
    // esmPlugins.analyzerJson,
  ];

  const inputFile = directory(`packages/${name}/${input}.${inputExtension}`);

  const [cjsBuild, esmBuild] = await Promise.all([
    rollup({
      onwarn,
      input: inputFile,
      external: externals,
      plugins: cjsList,
    }),
    es &&
      rollup({
        onwarn,
        input: inputFile,
        external: externals,
        plugins: esmList,
      }),
  ]);

  await Promise.all([
    cjsBuild.write({
      file: `${dir}/${cjs}`,
      format: 'cjs',
      freeze: false,
      name,
      sourcemap: true,
      // sourcemapPathTransform
      externalLiveBindings: false,
    }),
    es &&
      esmBuild.write({
        file: `${dir}/${es}`,
        format: 'es',
        freeze: false,
        name,
        sourcemap: true,
        // sourcemapPathTransform
      }),
  ]);
}

function onwarn(warning, rollupWarn) {
  if (
    warning.code !== 'CIRCULAR_DEPENDENCY' &&
    warning.code !== 'NON_EXISTENT_EXPORT'
  ) {
    rollupWarn(warning);
  }
}
