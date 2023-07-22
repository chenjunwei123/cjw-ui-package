/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:53:59
 * @FilePath: \前端\cjw-ui-package\packages\dialog\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwDialog from './index.vue'
cjwDialog.install = function (vue) {
  vue.component(cjwDialog.name, cjwDialog)
}
export default cjwDialog
