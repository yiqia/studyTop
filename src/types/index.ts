/* eslint-disable camelcase */
export interface ResType<T> {
  data: {
    code: number
    msg: string
    data: T
  }
}

export interface ResTypeTwo<T> {
  data: T
}
export interface UserLoginReq {
  user: string
  pass: string
}
export interface UserLoginRes {
  code: number
  msg: string
  session: string
}
export interface PageReq {
  page: number
  count?: number
}
export interface PageCountReq {
  count: number
}

export interface AlbumRes {
  Id: number
  class_id: number
  img: string
  info: string
  is_show: number
  num: number
  sort: number
  title: string
}

export interface AlbumInfoRes {
  Id: number
  img: string
  title: string
  info: string
  class_id: number
  sort: number
  is_show: number
  image: [
    {
      Id: number
      img: string
      video: string
    }
  ]
}

export interface saveAlbumInfoReq {
  Id: number
  title: string
  info: string
  is_show: number
  sort: number
  img: string
}
