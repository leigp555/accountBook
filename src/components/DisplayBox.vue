<template>
  <div class="displayBox" v-bind="$attrs">
    <label>
      <span>新增标签:</span>
      <input type="text" placeholder="输入标签名" v-model.lazy="newTag" @change="addTag"/>
    </label>
    <ol class="tag">
      <li @click.once="tagSelected(item)" v-for="(item,index) in label" :key="index">{{ item.name }}</li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

defineProps({
  label: Array,
})
const emit = defineEmits(["update:selectedLabel", "update:newTag"])
const tagSelected = (tag: string) => {
  emit("update:selectedLabel", tag)
}
const newTag=ref<string|number>("")
const addTag=()=>{
  emit("update:newTag",newTag.value)
  newTag.value=""
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