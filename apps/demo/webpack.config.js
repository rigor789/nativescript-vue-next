const webpack = require('@nativescript/webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = env => {
  webpack.init(env)

  // todo: move into @nativescript/webpack base config once ready (should be b/w compatible!)
  webpack.chainWebpack(config => {
    config.plugin('VueLoaderPlugin').use(VueLoaderPlugin)

    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader(require.resolve('vue-loader'))
      .tap(options => {
        return {
          ...options,
          isServerBuild: false,
          compiler: require.resolve('@nativescript-vue/compiler')
        }
      })

    config.plugin('DefinePlugin').tap(args => {
      Object.assign(args[0], {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
      })

      return args
    })

    config.plugin('ForkTsCheckerWebpackPlugin').tap(args => {
      args[0] = webpack.merge(args[0], {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@nativescript-vue/compiler'
            }
          }
        }
      })
      return args
    })
  })

  return webpack.resolveConfig()
}
