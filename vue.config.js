const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Backend server
        changeOrigin: true,              // Change the origin of the host header
        pathRewrite: {
          '^/api': '',  // Remove '/api' prefix in the request
        },
      },
    }
  }
})
