# @stackou/eslint-config

这是我个人的 ESLint 配置预设。它是基于 @antfu/eslint-config 的。我做了一些调整以符合个人喜好。

## 安装

在你的项目中安装 `@stackou/eslint-config` 包：

```bash
pnpm add -D eslint @stackou/eslint-config
```

在你的项目根目录下创建 eslint.config.js：

```js
// eslint.config.js
import stackou from '@stackou/eslint-config'

export default stackou()
```

## 用法

使用默认配置且不加参数会激活 @antfu/eslint-config 预设。

### 可选预设

在 @antfu/eslint-config 一些参数之外，还可以设置:

```js
// eslint.config.js
import stackou from '@stackou/eslint-config'

export default stackou({
  /**
   * 是否启用tailwindcss
   */
  tailwindcss: true,
  /**
   * 是否启用uniapp
   */
  uniapp: true,
  /**
   * 是否启用nestjs
   */
  nestjs: true,
  /**
   * 是否启用reactNative
   */
  reactNative: true
})
```

## NPM Scripts 脚本

将以下 lint 命令添加到你的脚本 package.json 部分：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code Support VS Code 支持

在 VS Code 中，为了启用对 ESLint 平面配置的支持，请编辑您的 .vscode/settings.json 文件并添加以下内容

```json
// .vscode/settings.json
{
  // 禁用默认格式化程序，改用eslint
  "editor.formatOnSave": false,

  // 自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // 为所有支持的语言启用eslint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```
