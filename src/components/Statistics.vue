<template>
<div class="content">
  <CountType class="title"/>
</div>
</template>

<script lang="ts" setup>
import CountType from "./CountType.vue";
</script>

<style lang="scss" scoped>
.content{
  height: 100%;
  >.title{
    background-color: orange;
  }
}
</style>