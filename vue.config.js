const { defineConfig } = require('@vue/cli-service')
const weburl = process.env.VUE_APP_API_URL
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      weburl
    ],
  },
  publicPath: './'
})