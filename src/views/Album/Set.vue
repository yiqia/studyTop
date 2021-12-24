<template>
  <div class="album-set">
    <el-card shadow="always">
      <el-form label-width="120px">
        <el-form-item label="头像地址">
          <el-input v-model="form.img"></el-input>
        </el-form-item>
        <el-form-item label="说明信息">
          <el-input v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="form.wx"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="分享标题">
          <el-input v-model="form.share_title"></el-input>
        </el-form-item>
        <el-form-item label="分享图片">
          <el-input v-model="form.share_img"></el-input>
        </el-form-item>
        <el-form-item label="七牛云处理接口">
          <el-input v-model="form.img_pro_url"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { AlbumSetRes } from '@/types'
import { getAlbumSet, saveAlbumSet } from '@/service/album'

interface Data {
  form: AlbumSetRes
}
export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup() {
    const data: Data = reactive<Data>({
      form: {
        Id: '',
        img: '',
        info: '',
        name: '',
        wx: '',
        phone: '',
        share_title: '',
        share_img: '',
        img_pro_url: ''
      }
    })
    getAlbumSet().then((res) => {
      data.form = res.data
    })
    const onSubmit = () => {
      saveAlbumSet(data.form).then((res) => {
        if (res.data.code === 1024) {
          ElMessage.success('保存成功')
        }
      })
    }
    return {
      onSubmit,
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss"></style>
