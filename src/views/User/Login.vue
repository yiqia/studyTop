<template>
  <div class="login">
    <el-card shadow="hover">
      <h4>登录</h4>
      <el-input class="form-input" v-model="form.user" placeholder="账号" />
      <el-input class="form-input" v-model="form.pass" type="password" placeholder="密码" />
      <el-button class="form-button" type="primary">登录</el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface Data {
  form: {
    user: String
    pass: String
  }
}
export default defineComponent({
  name: 'Login',
  props: {},
  components: {},
  setup() {
    const data: Data = reactive<Data>({
      form: {
        user: '',
        pass: ''
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style lang="scss">
body {
  @include background_color('background_color1');
}
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-input {
    margin-bottom: 30px;
  }
  .form-button {
    width: 100%;
  }
}
</style>
