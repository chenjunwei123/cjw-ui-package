/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:34:13
 * @FilePath: \前端\cjw-ui-package\packages\button\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwButton from './index.vue'
cjwButton.install = function (vue) {
  vue.component(cjwButton.name, cjwButton)
}
export default cjwButton
