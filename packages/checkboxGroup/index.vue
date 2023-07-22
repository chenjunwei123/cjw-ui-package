<template>
  <div class="cjw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cjwCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      checkboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
