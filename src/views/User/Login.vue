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
import { localSet } from '@/utils'
import router from '@/router'

interface Data {
  form: {
    user: string
    pass: string
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
      Login(data.form).then((res) => {
        if (res.data.code === 1024) {
          ElMessage.success('登录成功')
          localSet('session', res.data.session)

          router.push('/album')
        } else {
          ElMessage.error(res.data.msg)
        }
      })
    }
    return {
      sendLogin,
      ...toRefs(data)
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
