<template>
  <!-- <h5 class="menu-title">首页</h5> -->
  <div class="menu">
    <el-menu default-active="2" :router="true">
      <el-sub-menu index="1">
        <template #title>
          <div class="menu-item">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </div>
        </template>
        <el-menu-item index="1-1" route="/test"><div class="menu-item">item one</div></el-menu-item>
        <el-menu-item index="1-2"><div class="menu-item">item one</div></el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'aside',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.menu {
  .menu-title {
    text-indent: 25px;
  }
}
.el-menu {
  border: none;
}
</style>
