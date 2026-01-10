import { PKG_NAME_PREFIX } from '../globs'

export function ignores(userIgnores = []) {
  return [
    {
      ignores: ['node_modules/**', 'uni_modules/**', 'android/**', 'ios/**', 'build/**', 'dist/**', ...userIgnores],
      name: `${PKG_NAME_PREFIX}/ignores`,
    },
  ]
}
