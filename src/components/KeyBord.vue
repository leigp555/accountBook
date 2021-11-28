<template>
  <div v-bind="$attrs">
    <div class="dataExhibition">
      <span>0</span>
    </div>
    <div class="inputPad">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>今天</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>
        <svg class="icon">
          <use xlink:href="#icon-delete"></use>
        </svg>
      </button>
      <button>完成</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "KeyBord"
}
</script>

<style lang="scss" scoped>
.dataExhibition {
  font-size: 36px;
  padding: 12px 10px;
  background-color: #E5E5E5;
  display: flex;
  justify-content: end;
}

.inputPad {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > button {
    flex-grow: 1;
    font-size: 18px;
    line-height: 68px;
    text-align: center;
    width: 25vw;
    height: 68px;
    border: 1px solid #999;
  }
}
.icon {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}

</style>