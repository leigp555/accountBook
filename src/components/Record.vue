<template>
  <div class="container">
    <CountType/>
   <KeyBord/>
  </div>
</template>

<script lang="ts" setup>
import KeyBord from "./KeyBord.vue";
import CountType from "./CountType.vue";
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
}
</style>