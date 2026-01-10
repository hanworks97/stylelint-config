import antfu from '@antfu/eslint-config'
import { globals, ignores, javascript, reactNative, tailwindcss, uniapp, vue } from './config'

async function configFactory(options = {}, ...userConfigs) {
  options.ignores = ignores(options.ignores || []).ignores

  if (options.tailwindcss) {
    userConfigs.unshift(...(await tailwindcss()))
  }

  if (options.uniapp) {
    options.vue = true
    userConfigs.unshift(uniapp())
  }

  if (options.nestjs) {
    options.typescript = true
  }

  if (options.reactNative) {
    options.react = true
    userConfigs.unshift(...(await reactNative()))
  }

  if (options.vue) {
    userConfigs.unshift(vue())
  }

  userConfigs.unshift(javascript())

  userConfigs.push(globals())

  return antfu(options, ...userConfigs)
}

export default configFactory
