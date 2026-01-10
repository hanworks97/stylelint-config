import { PKG_NAME_PREFIX } from '../globs'

export function uniapp() {
  return [
    {
      files: ['**/pages.json'],
      name: `${PKG_NAME_PREFIX}/uniapp/sort-pages-json/rules`,
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^files$',
          },
        ],
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'pages',
              'condition',
              'globalStyle',
              'tabBar',
              'easycom',
              'topWindow',
              'leftWindow',
              'rightWindow',
              'subPackages',
              'preloadRule',
              'workers',
              'uniIdRouter',
              'entryPagePath',
            ],
            pathPattern: '^$',
          },
        ],
      },
    },
    {
      files: ['**/manifest.json'],
      name: `${PKG_NAME_PREFIX}/uniapp/sort-manifest-json/rules`,
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^files$',
          },
        ],
        'jsonc/sort-keys': [
          'error',
          // root
          {
            order: [
              'name',
              'appid',
              'description',
              'locale',
              'versionName',
              'versionCode',
              'networkTimeout',
              'debug',
              'uniStatistics',
              'app-plus',
              'h5',
              'quickapp',
              'mp-weixin',
              'mp-alipay',
              'mp-baidu',
              'mp-toutiao',
              'mp-lark',
              'mp-qq',
              'mp-kuaishou',
            ],
            pathPattern: '^$',
          },
          // network timeout
          {
            order: [
              'request',
              'connectSocket',
              'uploadFile',
              'downloadFile',
            ],
            pathPattern: '^networkTimeout$',
          },
          // app-plus
          {
            order: [
              'splashscreen',
              'screenOrientation',
              'modules',
              'distribute',
              'nvueCompiler',
              'nvueStyleCompiler',
              'renderer',
              'nvueLaunchMode',
              'nvue',
              'optimization',
              'runmode',
              'uniStatistics',
              'webView',
            ],
            pathPattern: '^app-plus$',
          },
        ],
      },
    },
    {
      files: ['**/theme.json'],
      name: `${PKG_NAME_PREFIX}/uniapp/sort-theme-json/rules`,
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^files$',
          },
        ],
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'light',
              'dark',
            ],
            pathPattern: '^$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^(light|dark)$',
          },
        ],
      },
    },
  ]
}
