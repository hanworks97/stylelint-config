# @stackou/stylelint-config

这是我个人的 Stylelint 配置预设。

## 安装

在你的项目中安装 `@stackou/stylelint-config` 包：

```bash
pnpm add -D eslint @stackou/stylelint-config
```

在你的项目根目录下创建 stylelint.config.js：

```js
// stylelint.config.js
import stackou from '@stackou/stylelint-config'

export default stackou
```

## NPM Scripts 脚本

将以下 lint 命令添加到你的脚本 package.json 部分：

```json
{
  "scripts": {
    "lint:stylelint": "stylelint \"**/*.{css,scss,vue}\" --fix"
  }
}
```

## VS Code Support VS Code 支持

在 VS Code 中，为了启用对 Stylelint 平面配置的支持，请编辑您的 .vscode/settings.json 文件并添加以下内容

```json
// .vscode/settings.json
{

  // 自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit",
    "source.organizeImports": "never"
  },

  // 为所有支持的语言启用stylelint
  "stylelint.validate": ["css", "postcss", "scss", "vue", "sass"]
}
```
