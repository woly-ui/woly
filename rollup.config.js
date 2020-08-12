import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

import reactSvg from 'rollup-plugin-react-svg';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import Package from './package.json';

const extensions = ['.ts', '.tsx', '.json'];

export default [
  {
    input: 'packages/woly',
    output: [
      {
        file: 'dist/common.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(Package.dependencies || {}),
      ...Object.keys(Package.peerDependencies || {}),
    ],
    plugins: [
      alias({
        entries: {
          '~': './src',
        },
        resolve: extensions,
      }),
      eslint({ exclude: /node_modules|.svg$/ }),
      typescript({ rollupCommonJSResolveHack: true, clean: true }),
      reactSvg({
        jsx: false,
      }),
      babel({
        extensions,
        exclude: 'node_modules/**',
      }),
      resolve({
        extensions,
      }),
      commonjs(),
      terser(),
    ],
  },
];
