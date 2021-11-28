<template>
  <div class="container">
    <router-view/>
    <Nav/>
  </div>
</template>


<script setup lang="ts">
import Nav from "./components/Nav.vue"
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
