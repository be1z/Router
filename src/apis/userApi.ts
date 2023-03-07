import { http } from '@/plugins/axios'
interface User {
  name: string
  age: number
  sex: string
}

interface LoginInterface {
  token: string
}

class userApi {
  constructor() {}
  info() {
    return http.request<User>({
      url: 'info',
    })
  }
  login(data: any) {
    return http.request<LoginInterface>({
      url: 'login',
      method: 'post',
      data,
    })
  }
}
export default new userApi()
