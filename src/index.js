// @see: https://stylelint.io
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/node_modules/**',
    '**/dist/**',
  ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: ['*.(html|vue)', '**/*.(html|vue)'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global', 'deep', 'export'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
    {
      customSyntax: 'postcss-scss',
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue/scss',
      ],
      files: ['*.scss', '**/*.scss'],
    },
  ],
  plugins: [
    'stylelint-order',
    '@stylistic/stylelint-plugin',
    'stylelint-scss',
  ],
  rules: {
    // 忽略一些自定义的 at 规则（避免误报）
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'warn',
          'for',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'each',
          'use',
          'forward',
          'return',
        ],
      },
    ],
    // 忽略字体族中缺失通用字体关键字的检查
    'font-family-no-missing-generic-family-keyword': null,
    // 允许使用未知的函数（如 SCSS 中定义的函数）
    'function-no-unknown': null,
    // 关闭对 `@import url()` 是否用引号的限制
    'import-notation': null,
    // 关闭对媒体查询 range 表达式的格式检查
    'media-feature-range-notation': null,
    // 关闭对命名 grid area 的格式验证
    'named-grid-areas-no-invalid': null,
    // 关闭对样式优先级倒置的警告
    'no-descending-specificity': null,
    // 忽略空的样式源（如空文件）
    'no-empty-source': null,
    // 属性顺序规则定义（使用 stylelint-order 插件）
    'order/order': [
      [
        // SCSS 的 $变量
        'dollar-variables',
        // CSS 自定义属性
        'custom-properties',
        // @include、@media、@supports 等
        'at-rules',
        // 普通声明
        'declarations',
        {
          name: 'supports',
          type: 'at-rule',
        },
        {
          name: 'media',
          type: 'at-rule',
        },
        {
          name: 'include',
          type: 'at-rule',
        },
        'rules',
      ],
      { severity: 'error' },
    ],
    // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
    'rule-empty-line-before': 'never',
    // SCSS 中允许使用自定义 at-rule（SCSS 插件规则）
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'warn',
          'for',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'each',
          'use',
          'forward',
          'return',
        ],
      },
    ],
    // 禁止使用未知的 CSS 单位（例如拼错或不标准的单位会报错）
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    // 禁止使用未知的类型选择器（即不认识的 HTML 标签）
    'selector-type-no-unknown': [
      true,
      {
        // 处理小程序page标签不认识的问题
        ignoreTypes: ['page'],
      },
    ],
    // 关闭某些属性值验证（有些工具类框架需要）
    'declaration-property-value-no-unknown': null,
    // 忽略 SCSS 运算符后的换行检查
    'scss/operator-no-newline-after': null,
    // 类名模式校验（BEM + 工具类命名支持）
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:[.+])?$',
    // 关闭 :not() 语法限制
    'selector-not-notation': null,
    // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'function-url-quotes': 'always',
    // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    'color-hex-length': 'long',
    // 解决不能使用 @import 引入 scss 文件
    'scss/at-import-partial-extension': null,
    // 禁止未知的属性
    'property-no-unknown': null,
    // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
    'value-no-vendor-prefix': null,
    // 解决在 scss 中使用 v-bind 大写单词报错
    'value-keyword-case': null,
    // 控制 CSS 中 @ 规则前是否需要空行
    'at-rule-empty-line-before': null,
    // 一行最多允许几个字符，超出则报错
    '@stylistic/max-line-length': null,
  },
}
