/* eslint-disable no-empty */
import axios, { AxiosRequestConfig } from 'axios'
// import { ElMessage } from 'element-plus'
// import router from '@/router/index'
import { localGet } from './index'
import config from '@/config/index'

// 这边由于后端没有区分测试和正式，姑且都写成一个接口。
axios.defaults.baseURL = config[import.meta.env.MODE].baseUrl
// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = true
// 请求头，headers 信息
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.token = localGet('token') || ''
// 默认 post 请求，使用 application/json 形式
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (res) => {
    /**
     * 根据你的项目实际情况来对 res 做处理
     * 这里对 res 按照项目处理一下
     */
    let cloneData = { ...res }
    const session = localGet('session')
    if (session) {
      if (cloneData.method === 'get') {
        cloneData = { ...cloneData, params: { ...cloneData.params, session } }
      } else {
        cloneData.data.session = session
      }
    }
    return cloneData
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 请求拦截器，内部根据返回值，重新组装，统一管理。
axios.interceptors.response.use((res) => {
  // if (typeof res.data !== 'object') {
  //   ElMessage.error('服务端异常！')
  // }
  // if (res.data.code === 1002 && res.data.msg) {
  //   ElMessage.error(res.data.msg)
  // }
  return res
})

export const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    axios(reqConfig)
      .then((res) => {
        resolve(res as any)
      })
      .catch(reject)
  })

export default request
