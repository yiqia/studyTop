<template>
  <!-- <h5 class="menu-title">首页</h5> -->
  <div class="menu">
    <el-menu default-active="1-1" :router="true">
      <el-sub-menu index="1">
        <template #title>
          <div class="menu-item">
            <i class="el-icon-picture"></i>
            <span>相册管理</span>
          </div>
        </template>
        <el-menu-item index="1-1" route="/album"
          ><div class="menu-item">相册列表</div></el-menu-item
        >
        <el-menu-item index="1-2" route="/albumset"
          ><div class="menu-item">相册设置</div></el-menu-item
        >
      </el-sub-menu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item> -->
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
