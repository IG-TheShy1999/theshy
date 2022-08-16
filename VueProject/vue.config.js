const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  productionSourceMap:false,
  lintOnSave: false,
  transpileDependencies: true,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        
      },
    },
    host:'localhost',
    port:8081,
    open:true,
  },

})
