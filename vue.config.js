const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 跳过检查host
  devServer: { disableHostCheck: true }
})