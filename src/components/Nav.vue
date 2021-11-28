<template>
  <div class="nav">
    <router-link to="detail">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-detail"></use>
      </svg>
      <span>明细</span>
    </router-link>
    <router-link to="record">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-record"></use>
      </svg>
      <span>记账</span>
    </router-link>
    <router-link to="statistics">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-statistics"></use>
      </svg>
      <span>统计</span>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.nav{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 10px 30px;
  >a{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
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