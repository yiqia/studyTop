<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px"><Aside /></el-aside>
      <el-container>
        <el-main><router-view /></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import Header from '@/views/Base/Header.vue'
import Aside from '@/views/Base/Aside.vue'

export default {
  components: {
    Header,
    Aside
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
body {
  @include background_color('background_color2');
  @include font_color('font_color1');
}
.el-header {
  @include border_color('border_color1');
  height: 60px;
  border-bottom: 1px solid;
  padding: 0;
}
.el-aside {
  @include border_color('border_color1');
  @include background_color('background_color1');
  border-bottom: 1px solid;
  border-right: 1px solid;

  height: calc(100vh - 60px);
  overflow-y: scroll;
}
</style>
