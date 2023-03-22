// SPDX-FileCopyrightText: 2021 Johannes Loher
//
// SPDX-License-Identifier: MIT

import copy from '@guanghechen/rollup-plugin-copy';
import terser from '@rollup/plugin-terser';

import { distDirectory, name, sourceDirectory } from './tools/const.mjs';

const staticFiles = [
  '.reuse',
  'CHANGELOG.md.license',
  'CHANGELOG.md',
  'lang',
  'LICENSE.md',
  'module.json.license',
  'module.json',
  'README.md',
];
const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: { [`${name}`]: `${sourceDirectory}/${name}.js` },
  output: {
    dir: distDirectory,
    format: 'es',
    sourcemap: true,
    assetFileNames: '[name].[ext]',
  },
  plugins: [
    copy({
      targets: [{ src: staticFiles, dest: distDirectory }],
    }),
    isProduction && terser({ ecma: 2020, keep_fnames: true }),
  ],
};

export default config;
