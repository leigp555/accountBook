<template>
  <div class="type" @click="toggle" ref="root" >
    <div >支出</div>
    <div >收入</div>
    <span :class="{'selected':selected}"></span>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
const selected=ref<boolean>(false)
const emit = defineEmits(["update:type"])
const toggle = (e: any) => {
  if (e.target.innerText === "收入") {
    selected.value=true
    emit("update:type", "+")
  } else if (e.target.innerText === "支出") {
    selected.value=false
    emit("update:type", "-")
  }
}

</script>

<style lang="scss" scoped>
.type {
  display: flex;
  justify-content: center;
  position: relative;
  >span{
    transition: all 250ms;
    width: 4em;
    height: 2px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    left: calc(25% - 2em);
  }
  > div {
    flex-grow: 1;
    text-align: center;
    font-size: 24px;
    padding: 16px 0;
    position: relative;
  }
  >span.selected{
    transition: all 250ms;
    left: calc(75% - 2em);
  }
}

</style>