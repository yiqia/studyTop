<template>
  <div class="login">
    <el-card shadow="always">
      <h4>登录</h4>
      <el-input class="form-input" v-model="form.user" placeholder="账号" />
      <el-input class="form-input" v-model="form.pass" type="password" placeholder="密码" />
      <el-button class="form-button" type="primary" @click="sendLogin">登录</el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'

import { Login } from '@/service/user'

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
    // @ts-ignore
    // const { proxy } = getCurrentInstance()
    const data: Data = reactive<Data>({
      form: {
        user: '',
        pass: ''
      }
    })
    const sendLogin = () => {
      Login(data.form).then((e) => {
        console.log(e)
      })
      ElMessage.error('123')
    }
    return {
      ...toRefs(data),
      sendLogin
    }
  }
})
</script>

<style lang="scss">
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
