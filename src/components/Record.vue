<template>
  <div class="container">
    <KeyBord v-model:money="money" :fn="fn"/>
    <CountType class="type" v-model:type="type"/>
    <Remarks v-model:remark="remarks" v-model:completed="completed"/>
    <DisplayBox :label="label" v-model:selectedLabel="selectedLabel" v-model:newTag="newTag" v-model:completed="completed"/>
  </div>
</template>

<script lang="ts" setup>
import KeyBord from "./KeyBord.vue";
import CountType from "./CountType.vue";
import Remarks from "./Remarks.vue";
import DisplayBox from "./DisplayBox.vue";
import {computed,ref, watchEffect} from "vue";
import {labelDate, useData} from "../assets/data";

const label:label=labelDate.getLabels()||[]
const detailData:Array=useData.getDate()||[]
const selectedLabel = ref<string|number>("")         //选中的标签
const newTag = ref<string>("")
watchEffect(() => {
  if (newTag.value !== "")
    label.push({id: label.length + 1, name: newTag.value})
})

const money = ref<number>(0)                      //money数目
const remarks = ref<string | number>("")          //备注
const type = ref<string>("-")                     //支出/收入
const data = ref<object>({})
const result = computed(() =>
    data.value = {type: type.value, selectedLabel: selectedLabel.value, remark: remarks.value, money: money.value}
)
const completed=ref<boolean>(false)
const fn = () => {
  if (selectedLabel.value===""){
    alert("必须选择一个标签")
  }else {
    detailData.push(result.value)
    useData.setDate(detailData)
    labelDate.setLabel(label)
    completed.value=true
    alert("记录成功")
  }
}
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