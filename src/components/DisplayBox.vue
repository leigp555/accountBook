<template>
  <div class="displayBox" v-bind="$attrs">
    <label>
      <span>新增标签:</span><input type="text" placeholder="输入标签名">
    </label>
    <ol class="tag">
      <li v-for="item in label" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
export default {
  name: "DisplayBox",
  props: {
    label: {
      type: Array,
      default: ["食", "食", "住","衣"]
    }
  },
  setup(){
  }
}
</script>

<style lang="scss" scoped>
.displayBox {
  height: 100%;
  display: inline-flex;
  flex-direction: column-reverse;
  padding-top: 10px;
  gap: 6px;

  > label {
    display: flex;
    justify-content: start;
    align-items: center;

    > span {
      padding-left: 10px;
      white-space: nowrap;
      font-size: 14px;
      line-height: 24px;
    }

    > input {
      border: none;
      width: 100%;
      font-size: 14px;
      margin-left: 8px;
      font-family: PingFang-SC-Regular, system-ui;
      &:focus {
        outline: none;
      }
    }
  }

  > .tag {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;

    > li {
      display: inline;
      height: 40px;
      font-size: 14px;
      margin: 4px;
      padding: 10px;
      border-radius: 10px;
      background-color: #999999;
      white-space: nowrap;
      text-align: center;
    }
  }
}
</style>