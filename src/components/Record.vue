<template>
  <div class="container">
    <KeyBord/>
    <CountType class="type"/>
    <Remarks/>
    <DisplayBox/>
  </div>
</template>

<script lang="ts" setup>
import KeyBord from "./KeyBord.vue";
import CountType from "./CountType.vue";
import Remarks from "./Remarks.vue";
import DisplayBox from "./DisplayBox.vue";
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  >.type{
    background-color: #c4c4c4;
  }
}
</style>