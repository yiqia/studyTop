import { request } from '@/utils/axios'

import { ResTypeTwo, UserLoginReq, UserLoginRes } from '@/types'

export const Login = (data: UserLoginReq) =>
  request<ResTypeTwo<UserLoginRes>>({
    url: '/user/login',
    method: 'GET',
    params: data
  })

export const getIsLogin = () => {}
