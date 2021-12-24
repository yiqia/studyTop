/* eslint-disable camelcase */
export interface ResType<T> {
  data: {
    code: number
    msg: string
    data: T
  }
}

export interface ConfigType {
  development: {
    baseUrl: string
  }
  beta: {
    baseUrl: string
  }
  release: {
    baseUrl: string
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
  img_pro: number
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
  img_pro: number
}

export interface SaveAlbumInfoReq {
  Id: number
  title: string
  info: string
  is_show: number
  sort: number
  img: string
  img_pro: number
}
export interface AlbumSetRes {
  Id: string
  img: string
  info: string
  name: string
  wx: string
  phone: string
  share_title: string
  share_img: string
  img_pro_url: string
}
