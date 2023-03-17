import { http } from '@/plugins/axios'
export interface User {
  name: string
  age: number
  sex: string
  img: string
}

interface LoginInterface {
  token: string
}
export interface Ilogin {
  account: string
  password: string
}

class userApi {
  constructor() {}
  info() {
    return http.request<User>({
      url: 'user/info',
    })
  }
  login(data: Ilogin) {
    return http.request<LoginInterface>({
      url: 'login',
      method: 'post',
      data,
    })
  }
}

export default new userApi()
