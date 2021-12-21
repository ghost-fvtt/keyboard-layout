import copy from '@guanghechen/rollup-plugin-copy';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

import { distDirectory, name, sourceDirectory } from './tools/const.mjs';

const staticFiles = ['lang', 'module.json'];
const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: { [`module/${name}`]: `${sourceDirectory}/module/${name}.js` },
  output: {
    dir: distDirectory,
    format: 'es',
    sourcemap: true,
    assetFileNames: '[name].[ext]',
  },
  plugins: [
    sourcemaps(),
    copy({
      targets: [{ src: staticFiles.map((file) => `${sourceDirectory}/${file}`), dest: distDirectory }],
    }),
    isProduction && terser({ ecma: 2020, keep_fnames: true }),
  ],
};

export default config;
