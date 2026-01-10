import { GLOB_VUE } from '@antfu/eslint-config'
import { PKG_NAME_PREFIX } from '../globs'

export function vue() {
  return [
    {
      files: [GLOB_VUE],
      name: `${PKG_NAME_PREFIX}/vue/rules`,
      rules: {
      // 强制组件名的大小写为 "PascalCase" 或 "kebab-case"
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
          registeredComponentsOnly: false, // 校验全局和局部注册的组件
          ignores: [], // 需要忽略校验的组件名称
        }],
        // 用来确保在 Vue 组件中自定义事件的命名遵循特定的命名约定
        'vue/custom-event-name-casing': ['error', 'kebab-case', {
          ignores: [],
        }],
        // 强制 defineEmits 使用有效的语法和格式（适用于 <script setup>）
        // 例如必须使用 defineEmits({}) 或 defineEmits<Type>() 等合法方式定义
        'vue/valid-define-emits': 'error',
        // 控制标签属性的换行
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        }],
        // 用于强制组件内部的结构（如生命周期钩子、方法、计算属性等）按照指定的顺序排列
        'vue/block-order': ['error', {
          order: ['script', 'template', 'style'],
        }],
      },
    },
  ]
}
