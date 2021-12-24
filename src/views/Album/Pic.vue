<template>
  <div class="pic">
    <el-tabs class="themeClass" v-model="activeName" tabPosition="top" type="border-card">
      <el-tab-pane label="相册信息" name="Info"
        ><div class="card">
          <h4>相册信息</h4>
          <el-form label-width="120px">
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="说明">
              <el-input v-model="form.info"></el-input>
            </el-form-item>
            <el-form-item label="封面">
              <el-input v-model="form.img"></el-input>
            </el-form-item>
            <el-form-item label="是否展示">
              <el-switch v-model="form.is_show"></el-switch>
            </el-form-item>
            <el-form-item label="是否开启水印">
              <el-switch v-model="form.img_pro"></el-switch>
            </el-form-item>
            <el-form-item label="排序">
              <el-input v-model="form.sort"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </div></el-tab-pane
      >
      <el-tab-pane label="图片列表" name="Pic">
        <div v-if="form.image && form.image?.length < 1">
          <el-empty description="没有图片"></el-empty>
        </div>
        <div class="pic-image" v-if="form.image && form.image?.length > 0">
          <el-image
            v-for="item in form.image"
            style="width: 200px; height: 200px"
            :src="item.img"
            fit="contain"
            :key="item.Id"
            :preview-src-list="previewImage"
          ></el-image>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上传图片" name="upload">
        <div class="album-upload">
          <el-upload class="upload" drag :action="url" multiple :data="{ session, id: form.Id }">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">可以拖拽文件上传 <em>点击文件上传</em></div>
            <template #tip>
              <div class="el-upload__tip">jpg/png files</div>
            </template>
          </el-upload>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { UploadFilled } from '@element-plus/icons'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { localGet } from '@/utils'
import config from '@/config/index'

import { getAlbumInfo, saveAlbumInfo } from '@/service/album'

interface Data {
  form: {
    Id: number
    title: string
    info: string
    is_show: boolean | number
    sort: number
    img: string
    image?: {
      Id: number
      img: string
      video: string
    }[]
    img_pro: boolean | number
  }
  activeName: string
  url: string
}
export default defineComponent({
  name: '',
  props: {},
  components: {
    UploadFilled
  },
  setup() {
    const data: Data = reactive<Data>({
      activeName: 'Info',
      form: {
        Id: 0,
        title: '',
        info: '',
        is_show: false,
        sort: 0,
        img: '',
        image: [],
        img_pro: false
      },
      url: ''
    })
    const session = localGet('session')
    const previewImage = computed(() => {
      if (data.form.image) {
        return data.form.image.map((item) => item.img)
      }
      return []
    })
    data.url = `${config[import.meta.env.MODE].baseUrl}/album/updataPicQiniu`

    const Id = Number(router.currentRoute.value.params.id)
    console.log('Id', Id)
    const getInfo = () => {
      if (Id) {
        getAlbumInfo(Id).then((res) => {
          console.log('res', res.data)
          data.form = {
            ...res.data,
            is_show: !!res.data.is_show,
            img_pro: !!res.data.img_pro
          }
          console.log(data.form)
        })
      }
    }
    getInfo()
    const onSubmit = () => {
      const albumData = {
        ...data.form,
        is_show: data.form.is_show ? 1 : 0,
        img_pro: data.form.img_pro ? 1 : 0
      }
      delete albumData.image
      saveAlbumInfo(albumData).then(() => {
        ElMessage.success('保存成功')
      })
    }
    return {
      onSubmit,
      previewImage,
      session,
      ...toRefs(data)
    }
  }
})
</script>

<style lang="scss">
.pic {
  .pic-image {
    height: 75vh;
    overflow-y: scroll;
  }
  .album-upload {
    .upload {
      width: 100%;
    }
    .el-upload {
      width: 100%;
    }
    .el-upload-dragger {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .el-icon--upload {
      font-size: 100px;
    }
  }
}
</style>
