import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: './src/main.js',
    output: {
      name: 'multipleOf',
      file: 'dist/is-multiple-of.esm.js',
      format: 'esm'
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        namedExports: {
          'src/main.js': ['multipleOf']
        }
      })
    ]
  }
]
