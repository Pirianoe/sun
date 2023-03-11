const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
devServer:{
   proxy:{
      '/api1':{
               target:'https://www.jtgs-ygcy.cn', 
               ws:true, 
               secure:false,
               changeOrigin:true, //是否跨域
               pathRewrite:{         //重写路径
                            '^/api1':''
                           }
             }
   }
}
})
