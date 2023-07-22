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
import cjwFormItem from './index.vue'
cjwFormItem.install = function (vue) {
  vue.component(cjwFormItem.name, cjwFormItem)
}
export default cjwFormItem
