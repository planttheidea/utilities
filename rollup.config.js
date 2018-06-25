import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      file: 'dist/pti-utilities.js',
      format: 'umd',
      name: 'utils',
      sourcemap: true,
    },
    plugins: [
      resolve({
        main: true,
        module: true,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      file: 'dist/pti-utilities.min.js',
      format: 'umd',
      name: 'utils',
    },
    plugins: [
      resolve({
        main: true,
        module: true,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];
