/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 20:51:06
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:17:49
 * @FilePath: \前端\cjw-ui-package\vue.config.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      // 修改项目入口文件
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  // 扩展webpack配置,使webpages加入编译
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(path.resolve(__dirname,'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      return options
    })
  }
})
