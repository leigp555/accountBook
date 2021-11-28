<template>
  <div class="container">
    <ol class="content">
      <li v-for="(item,index) in tag" :key="index">
        <span>{{ item.tag }}</span>
        <svg class="icon">
          <use xlink:href="#icon-select"></use>
        </svg>
      </li>
    </ol>
    <button class="addNewTag">新建标签</button>
  </div>

</template>

<script lang="ts" setup>
const tag = [
  {id: 1, tag: "衣"},
  {id: 1, tag: "食"},
  {id: 1, tag: "住"},
  {id: 1, tag: "行"}
]
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  > .content {
    overflow: auto;
    margin-top: 20px;

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      margin: 0 20px;
      box-shadow: inset 0px -0.5px 0px #BCBBC1;;
      font-size: 16px;
    }
  }

  > .addNewTag {
    width: 100px;
    height: 50px;
    align-self: center;
    border: none;
    background-color: orange;
    border-radius: 10px;
  }
}


.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>