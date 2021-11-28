<template>
<div class="type" v-bind="$attrs">
  <div>支出</div>
  <div>收入</div>
</div>
</template>

<script lang="ts">
export default {
  name: "CountType"
}
</script>

<style lang="scss" scoped>
.type{
  display: flex;
  justify-content: center;
  >div{
    flex-grow: 1;
    text-align: center;
    font-size: 24px;
    padding: 16px 0;
  }
}
</style>