<template>
  <div>hello</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface Data {}
export default defineComponent({
  name: 'Hello',
  props: {},
  components: {},
  setup() {
    const data: Data = reactive<Data>({})
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss"></style>
