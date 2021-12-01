<template>
  <div class="container">
    <CountType class="title" v-model:type="countType"/>
    <ol v-if="countType==='+'">
      <li v-for="(item,index) in income" :key="index">
        <input :placeholder="item.selectedLabel.name" type="text">
        <input :placeholder="item.remark" type="text">
        <input :placeholder="'￥'+item.money" type="text">
      </li>
    </ol>
    <ol v-else-if="countType==='-'">
      <li v-for="(item,index) in expenditure" :key="index">
        <input :placeholder="item.selectedLabel.name" type="text">
        <input :placeholder="item.remark" type="text">
        <input :placeholder="'￥'+item.money" type="text">
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {useData} from "../assets/data";
import CountType from "./CountType.vue";

const data = ref<Array>()
data.value = useData.getDate()
const countType=ref<string>("-")
const income=computed(()=>{
   return data.value.filter(item=>{
     if(item.type==="+"){
       return item
     }
   }).reverse()
})
const expenditure=computed(()=>{
  return data.value.filter(item=>{
    if(item.type==="-"){
      return item
    }
  }).reverse()
})
</script>
<style lang="scss" scoped>
.container {
  height: 100%;

  > .title {
    background-color: orange;
  }

  > ol {
    margin: 0 auto;
    > li {
      > input {
        border: none;
        margin: 0 5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      :first-child{
        width: 4em;
        text-align: left;
      }
      :nth-child(2){
        width: 9em;
        text-align: center;
      }
      :nth-child(3){
        width: 4em;
        text-align: right;
      }
    }
  }
}
</style>