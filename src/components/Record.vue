<template>
  <div class="container">
    <KeyBord v-model:money="money"/>
    <CountType class="type" v-model:type="type"/>
    <Remarks v-model:remark="remarks"/>
    <DisplayBox :label="label" @update:selectedLabel="selectedLabel.push($event)" v-model:newTag="newTag"/>
  </div>
</template>

<script lang="ts" setup>
import KeyBord from "./KeyBord.vue";
import CountType from "./CountType.vue";
import Remarks from "./Remarks.vue";
import DisplayBox from "./DisplayBox.vue";
import {ref, watchEffect} from "vue";


let label: label = [                                 //标签获取
  {id: 1, name: "衣"},
  {id: 2, name: "食"}
]
const selectedLabel = ref<string[]>([])         //选中的标签
const newTag = ref<string>("")
watchEffect(() => {
  if (newTag.value !== "")
    label.push({id: [label.length], name: newTag.value})
})

const money=ref<number>(0)                      //money数目
const remarks=ref<string|number>("xx")          //备注
const type=ref<string>("+")
</script>


<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;

  > .type {
    background-color: #c4c4c4;
  }
}
</style>