<template>
  <div class="header">
    <div class="title" @click="router.push('/')">相册后台管理系统</div>
    <div class="light">
      <div class="exit" @click="exit">注销</div>

      <i class="fas fa-sun" v-show="light" @click="switchLights"></i>
      <i class="fas fa-moon" v-show="!light" @click="switchLights"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { localRemove } from '@/utils'

export default defineComponent({
  name: 'Header',
  setup() {
    // eslint-disable-next-line no-unused-vars
    const router = useRouter()
    const light = ref(true)
    // eslint-disable-next-line no-unused-vars
    const switchLights = () => {
      light.value = !light.value
      window.document.documentElement.setAttribute('data-theme', light.value ? 'light' : 'dark')
    }
    const exit = () => {
      localRemove('session')
      router.push('/login')
    }
    return {
      router,
      exit,
      switchLights,
      light
    }
  }
})
</script>
<style scoped lang="scss">
.header {
  @include background_color('background_color1');
  @include font_color('font_color1');
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: bold;
  .title {
    font-size: 20px;
    cursor: pointer;
  }

  .light {
    font-size: 16px;
    display: flex;
    .exit {
      margin-right: 20px;
      cursor: pointer;
    }
    .icon {
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
