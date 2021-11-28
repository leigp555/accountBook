<template>
  <ol class="nav">
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-detail"></use>
      </svg>
      <span>明细</span>
    </li>
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-record"></use>
      </svg>
      <span>记账</span>
    </li>
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-statistics"></use>
      </svg>
      <span>统计</span>
    </li>
  </ol>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.nav{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 15px 30px;
  >li{
    display: flex;
    flex-direction: column;
    align-items: center;
    >.icon{
      width: 32px;
      height: 32px;
    }
    >span{
      font-size: 18px;
    }
  }
}
</style>