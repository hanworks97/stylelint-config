import stackou from './dist/index.js'

export default stackou({
  formatters: true,
}, {
  rules: {
    'antfu/no-import-dist': 'off',
  },
})
