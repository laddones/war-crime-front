const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve('timers-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: false // Используйте пустой модуль вместо полифила
      },
    },
  },
  devServer: {
    proxy: {
      '/admin': {
        target: 'http://localhost:8000',  // Адрес вашего сервера Django
        changeOrigin: true,
      },
    },
  },
})


