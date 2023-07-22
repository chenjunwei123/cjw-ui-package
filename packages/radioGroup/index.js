/*
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 21:33:00
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 21:35:31
 * @FilePath: \前端\cjw-ui-package\packages\radioGroup\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import cjwRadioGroup from './index.vue'
cjwRadioGroup.install = function (vue) {
  vue.component(cjwRadioGroup.name, cjwRadioGroup)
}
export default cjwRadioGroup
