import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '成功',
        type: 'success',
        result: {
          name: 'beiz',
          age: 22,
          sex: '男',
          img: 'title.jpg',
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '成功',
        type: 'success',
        result: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
