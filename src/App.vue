<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script lang="ts">
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  setup() {
    return {}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
