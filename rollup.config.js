import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

export default defineConfig({
  input: './src/index.js',
  output: [
    {
      dir: 'dist',
      entryFileNames: 'index.cjs',
      format: 'cjs',
    },
    {
      dir: 'dist',
      entryFileNames: 'index.js',
      format: 'esm',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    commonjs(),
    nodeResolve(),
    json(),
    terser(),
    copy({
      targets: [
        {
          src: 'src/index.d.ts', // 源文件
          dest: 'dist', // 目标目录
        },
      ],
      hook: 'writeBundle', // 打包完成后复制
    }),
  ],
  external: [
    'stylelint',
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-order',
    'stylelint-scss',
    '@stylistic/stylelint-plugin',
    'postcss',
    'postcss-scss',
    'postcss-html',
    'autoprefixer',
  ],
})
