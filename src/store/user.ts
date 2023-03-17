import { defineStore } from 'pinia'
import userApi, { User } from '@/apis/userApi'
export default defineStore('user', {
  state: () => {
    return {
      info: {} as null | User,
    }
  },
  actions: {
    async getUserInfo() {
      const res = await userApi.info()
      this.info = res.result
    },
  },
})
