import { PKG_NAME_PREFIX } from '../globs'

export function javascript() {
  return [
    {
      name: `${PKG_NAME_PREFIX}/javascript/rules`,
      rules: {
        // 用来控制在对象字面量中的属性名是否需要加引号
        'quote-props': 'off',
        // 用来强制要求代码中 不使用制表符（Tab）作为缩进
        'style/no-tabs': 'off',
      },
    },
  ]
}
