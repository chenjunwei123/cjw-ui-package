<!--
 * @Author: cjw 15316117075@163.com
 * @Date: 2023-07-22 20:51:06
 * @LastEditors: cjw 15316117075@163.com
 * @LastEditTime: 2023-07-22 23:21:23
 * @FilePath: \前端\cjw-ui-package\examples\App.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div id="app">
    <cjw-switch v-model="active" active-color="#13ce66" inactive-color="#ff4949"></cjw-switch>
    <cjw-button type="primary" round>111</cjw-button>
    <cjw-input type="password" clearable v-model="username"></cjw-input>
    <cjw-input placeholder="请输入用户名" type="password" clearable v-model="username"></cjw-input>
    <!-- <i class="icon-qukuai"></i> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      active: false,
      username: ''
    }
  }
}
</script>

<style lang="scss">

</style>
