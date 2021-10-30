import { request } from '@/utils/axios'

import { UserLoginReq } from '@/types'

export const Login = (data: UserLoginReq) =>
  request<UserLoginReq>({
    url: '/user/login',
    method: 'GET',
    params: data
  })

export const getIsLogin = () => {}
