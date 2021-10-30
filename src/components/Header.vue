<template>
  <div class="header">
    <div class="title" @click="router.push('/')">Vite2.x + Vue3.x + TypeScript Starter</div>
    <div class="light" @click="switchLights">
      <i class="fas fa-sun" v-show="light"></i>
      <i class="fas fa-moon" v-show="!light"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

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
    return {
      router,
      switchLights,
      light
    }
  }
})
</script>
<!--
<style scoped lang="stylus">
.header {
  width 100%
  height 100%
  bg_color(card_background_color)
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  box-sizing border-box
  font-weight bold
  font_color(font_color_main)

  .title {
    font-size 20px
    cursor pointer
  }

  .light {
    cursor pointer
    font-size 16px

    .icon {
      font-size 20px
    }
  }
}
</style> -->
