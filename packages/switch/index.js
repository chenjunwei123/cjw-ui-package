/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:35:09
 * @FilePath: \前端\cjw-ui-package\packages\switch\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwSwitch from './index.vue'
cjwSwitch.install = function (vue) {
  vue.component(cjwSwitch.name, cjwSwitch)
}
export default cjwSwitch
