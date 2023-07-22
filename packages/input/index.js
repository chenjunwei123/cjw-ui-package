/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:36:01
 * @FilePath: \前端\cjw-ui-package\packages\input\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwInput from './index.vue'
cjwInput.install = function (vue) {
  vue.component(cjwInput.name, cjwInput)
}
export default cjwInput
