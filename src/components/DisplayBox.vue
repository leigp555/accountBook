<template>
  <div class="displayBox" v-bind="$attrs">
    <label>
      <span>新增标签:</span>
      <input type="text" placeholder="输入标签名" v-model.lazy="newTag" @change="addTag"/>
    </label>
    <ol class="tag">
      <li @click="(e)=>tagSelected(item,e)" v-for="(item,index) in label" :key="index">{{ item.name }}</li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import {ref, watchEffect} from "vue";

const props = defineProps({
  label: Array,
  completed:Boolean
})
const dom = ref<HTMLDivElement>("")
watchEffect(()=>{
   if(props.completed===true&&dom.value){
     dom.value.className=""
     emit("update:completed",false)
   }
})
const selectedTag = ref<string | number>("")
const emit = defineEmits(["update:selectedLabel", "update:newTag","update:completed"])
const tagSelected = (tag: tag, e: Event) => {
  selectedTag.value = tag
  if (dom.value) dom.value.className = ""
  dom.value = e.target
  dom.value.className = "domSelected"
  emit("update:selectedLabel", selectedTag.value)
}
const newTag = ref<string | number>("")
const bool = ref<boolean>(true)
const addTag = () => {
  if (props.label) {
    props.label.forEach((item: object) => {
      if (item.name === newTag.value) {
        bool.value = false
      }
    })
  }
  if (bool.value === true) {
    emit("update:newTag", newTag.value)
    newTag.value = ""
  } else {
    alert("标签名重复")
  }
  bool.value = true
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

    > .domSelected {
      background-color: orange;
    }
  }
}

</style>