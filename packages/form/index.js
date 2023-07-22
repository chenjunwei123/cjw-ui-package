/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:36:39
 * @FilePath: \前端\cjw-ui-package\packages\form\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwForm from './index.vue'
cjwForm.install = function (vue) {
  vue.component(cjwForm.name, cjwForm)
}
export default cjwForm
