<template>
  <div class="type" @click="toggle">
    <div >支出</div>
    <div >收入</div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:type"])
const toggle = (e: any) => {
  if (e.target.innerText === "收入") {
    emit("update:type", "+")
  } else if (e.target.innerText === "支出") {
    emit("update:type", "-")
  }
}

</script>

<style lang="scss" scoped>
.type {
  display: flex;
  justify-content: center;

  > div {
    flex-grow: 1;
    text-align: center;
    font-size: 24px;
    padding: 16px 0;
    position: relative;
  }
}

</style>