import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/tinyTypewriter.js',
  output: [
    {
      file: 'dist/tinyTypewriter.min.js',
      format: 'umd',
      name: 'tinyTypewriter',
      plugins: [terser()],
    },
    {
      file: 'dist/tinyTypewriter.js',
      format: 'umd',
      name: 'tinyTypewriter',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'runtime', skipPreflightCheck: true }),
  ],
};