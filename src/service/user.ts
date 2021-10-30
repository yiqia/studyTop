import axios from '@/utils/axios'

import { UserLoginReq } from '@/types'

export const Login = (data: UserLoginReq) =>
  axios({
    url: '/user/login',
    method: 'GET',
    params: data
  })

export const getIsLogin = () => {}
