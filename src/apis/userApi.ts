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
  login() {
    return http.request<LoginInterface>({
      url: 'login',
    })
  }
}
export default new userApi()
