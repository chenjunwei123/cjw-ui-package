/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:32:20
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 23:15:43
 * @FilePath: \前端\cjw-ui-package\packages\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// components/index.js
// import Vue from 'vue'

import './fonts/iconfont.css'

const components = {}

// 使用 require.context 导入组件 包含install
const requireComponent = require.context('./', true, /index\.js$/)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const component = componentConfig.default || componentConfig
  components[component.name] = component
})

// 定义 install 方法
const install = function (vue) {
  Object.values(components).forEach(component => {
    // Vue.component(component.name, component)
    vue.use(component)
  })
}
const cjwUI = {
  install
}

// console.log('components:', components)

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// console.log(components)
export { components }
export default cjwUI
