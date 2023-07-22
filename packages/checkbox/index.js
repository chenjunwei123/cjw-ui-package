/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:37:22
 * @FilePath: \前端\cjw-ui-package\packages\checkbox\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwCheckbox from './index.vue'
cjwCheckbox.install = function (vue) {
  vue.component(cjwCheckbox.name, cjwCheckbox)
}
export default cjwCheckbox
