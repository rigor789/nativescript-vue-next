const webpack = require('@nativescript/webpack')
const { VueLoaderPlugin } = require('vue-loader')
const VueLoaderPath = require.resolve('vue-loader')

module.exports = (env) => {
  webpack.init(env)

  webpack.chainWebpack((config) => {
    config.plugin('VueLoaderPlugin').use(VueLoaderPlugin)

    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader(VueLoaderPath)
      .tap((options) => {
        return {
          ...options,
          isServerBuild: false,
          compiler: require('@nativescript-vue/compiler'),
        }
      })
  })

  return webpack.resolveConfig()
}
