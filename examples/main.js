/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 20:51:06
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 23:25:16
 * @FilePath: \前端\cjw-ui-package\examples\main.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import cjwUI from '../packages/index.js'
Vue.use(cjwUI)
// import { components } from '../packages/index.js'
// const { cjwButton, cjwSwitch, cjwInput } = components
// Vue.component(cjwButton.name, cjwButton)
// Vue.component(cjwSwitch.name, cjwSwitch)
// Vue.component(cjwInput.name, cjwInput)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
