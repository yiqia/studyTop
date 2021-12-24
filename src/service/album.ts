import { request } from '@/utils/axios'

import {
  PageReq,
  AlbumRes,
  ResTypeTwo,
  ResType,
  PageCountReq,
  AlbumInfoRes,
  SaveAlbumInfoReq,
  AlbumSetRes
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

export const saveAlbumInfo = (data: SaveAlbumInfoReq) =>
  request<ResTypeTwo<{}>>({
    url: '/album/saveInfo',
    method: 'POST',
    data
  })

export const getAlbumSet = () =>
  request<ResTypeTwo<AlbumSetRes>>({
    url: '/album/getSet',
    method: 'GET'
  })

export const saveAlbumSet = (data: AlbumSetRes) =>
  request<ResType<{}>>({
    url: '/album/saveAlbumSet',
    method: 'POST',
    data
  })
