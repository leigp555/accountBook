<template>
  <div class="remark" v-bind="$attrs">
    <label>
      <span>备注:</span>
      <input type="text" placeholder="在这里添加备注" v-model="remark" @change="onInput">
    </label>
  </div>

</template>

<script lang="ts" setup>
import {ref, watchEffect} from "vue";

const props = defineProps({
  completed: Boolean
})
const remark = ref<number | string>("")
const emit = defineEmits(["update:remark"])
watchEffect(()=>{
  if(props.completed===true){
    remark.value=""
  }
})
const onInput = () => {
  emit("update:remark", remark.value)
}
</script>

<style lang="scss" scoped>
.remark {
  font-size: 14px;
  background-color: #f5f5f5;
  padding: 0 10px;

  > label {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: nowrap;

    > span {
      white-space: nowrap;
    }

    > input {
      width: 100%;
      padding: 20px 0;
      font-family: PingFang-SC-Regular, system-ui;
      line-height: normal;
      font-size: 14px;
      text-indent: .4rem;
      color: #333;
      border: none;
      float: left;
      background-color: #f5f5f5;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>