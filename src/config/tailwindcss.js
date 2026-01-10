import { PKG_NAME_PREFIX } from '../globs'

export async function tailwindcss() {
  const pluginTailwindcss = (await import('eslint-plugin-tailwindcss')).default
  return [
    ...pluginTailwindcss.configs['flat/recommended'],
    {
      name: `${PKG_NAME_PREFIX}/tailwindcss/rules`,
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
      settings: {
        tailwindcss: {
          // These are the default values but feel free to customize
          callees: ['classnames', 'clsx', 'ctl', 'cn'],
        },
      },
    },
  ]
}
