import { json } from 'stream/consumers'

interface IData {
  expire?: number
  [key: string]: any
}

export default {
  set(key: string, data: IData) {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem('token', JSON.stringify(data))
  },
  get(key: string): string | null {
    const item = localStorage.getItem(key)
    if (item) {
      const data = JSON.parse(item)
      const explore = data?.expire
      if (explore && explore < new Date().getTime()) {
        localStorage.removeItem(key)
        return null
      }
      return data
    }
    return null
  },
}
