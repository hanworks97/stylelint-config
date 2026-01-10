import type { OptionsConfig as AntfuOptionsConfig, Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

/**
 * ESLint配置选项
 * 扩展了@antfu/eslint-config的OptionsConfig，添加了tailwindcss选项
 */
interface OptionsConfig extends AntfuOptionsConfig, Omit<TypedFlatConfigItem, 'files'> {
  /**
   * 是否启用tailwindcss
   */
  tailwindcss?: boolean
  /**
   * 是否启用uniapp
   */
  uniapp?: boolean
  /**
   * 是否启用nestjs
   */
  nestjs?: boolean
  /**
   * 是否启用reactNative
   */
  reactNative?: boolean
}

declare function configFactory(options?: OptionsConfig, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames>

export { configFactory as default }
