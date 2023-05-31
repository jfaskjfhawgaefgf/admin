const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 跳过检查host
  devServer: {
    allowedHosts: [
      'demo.filmpie.glxycl.top'  
    ],
  }
})