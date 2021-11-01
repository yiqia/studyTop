<template>
  <div>
    <el-row :gutter="6">
      <el-col v-for="item in album" :key="item.Id" :span="4">
        <el-card
          class="card themeClass"
          :body-style="{ padding: '0px' }"
          @click="cardClick(item.Id)"
        >
          <el-image
            class="image"
            style="width: 100%; height: 150px"
            :src="item.img"
            fit="cover"
          ></el-image>
          <div style="padding: 14px">
            <div class="text-hide">
              <span> {{ item.title }}</span>
            </div>
            <div class="bottom text-hide">
              <span>{{ item.info }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      @current-change="currentChange"
      background
      layout="prev, pager, next"
      :total="count"
      :page-size="18"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import router from '@/router'

import { getAlbum, getAlbumCount } from '@/service/album'
import { AlbumRes } from '@/types/index'

interface Data {
  album: AlbumRes[]
  count: number
}
export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup() {
    const data: Data = reactive<Data>({
      album: [],
      count: 0
    })
    const getAlbumMethod = (page: number = 1) => {
      getAlbum({
        page,
        count: 18
      }).then((res) => {
        data.album = res.data
      })
    }
    getAlbumCount().then((res) => {
      data.count = res.data[0].count
    })
    getAlbumMethod()
    const cardClick = (Id: number) => router.push(`/pic/${Id}`)
    const currentChange = (page: number) => {
      getAlbumMethod(page)
    }
    return {
      currentChange,
      cardClick,
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 10px;
  height: 230px;
  cursor: pointer;
  .image {
    height: 150px;
    width: 100%;
  }
  .bottom {
    font-size: 12px;
  }
}
</style>
