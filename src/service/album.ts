import { request } from '@/utils/axios'

import {
  PageReq,
  AlbumRes,
  ResTypeTwo,
  PageCountReq,
  AlbumInfoRes,
  saveAlbumInfoReq
} from '@/types'

export const getAlbum = (data: PageReq) =>
  request<ResTypeTwo<AlbumRes[]>>({
    url: '/album/getAllAlbum',
    method: 'GET',
    params: data
  })
export const getAlbumCount = () =>
  request<ResTypeTwo<PageCountReq[]>>({
    url: '/album/getalbumCount',
    method: 'GET'
  })

export const getAlbumInfo = (id: number) =>
  request<ResTypeTwo<AlbumInfoRes>>({
    url: '/album/getAlbumList',
    method: 'GET',
    params: {
      id
    }
  })

export const saveAlbumInfo = (data: saveAlbumInfoReq) =>
  request<ResTypeTwo<{}>>({
    url: '/album/saveInfo',
    method: 'POST',
    data
  })
