<template>
  <div v-bind="$attrs">
    <div class="dataExhibition">
      <span ref="showNumber">{{ padNumber ? padNumber : 0 }}</span>
    </div>
    <div @click="onClick" class="inputPad">
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
      <button>清除</button>
      <button>完成</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {computer} from "../assets/computer";
const padNumber = ref<string>("")
const emit=defineEmits(["update:money"])
const props=defineProps({fn:Function})
const commit=()=>{
  emit("update:money",padNumber.value)
}
const onClick = (e: any) => {
  const innerText:string=e.target.innerText
  try{
    computer(padNumber,innerText)
  }catch (error){
    padNumber.value=""
  }
  if(innerText==="完成"){
    commit()
    props.fn()
  }
  if(innerText==="清除")commit()
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
</style>