// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  lintOnSave:false,
  publicPath:process.env.NODE_ENV = "production"?"./":"/"
}