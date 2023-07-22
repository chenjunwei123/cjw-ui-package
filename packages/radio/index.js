/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:35:47
 * @FilePath: \前端\cjw-ui-package\packages\radio\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwRadio from './index.vue'
cjwRadio.install = function (vue) {
  vue.component(cjwRadio.name, cjwRadio)
}
export default cjwRadio
