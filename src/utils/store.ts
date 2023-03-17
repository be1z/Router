import { cacheEnum } from '@/enum/cacheEnum'

interface IData {
  expire?: number
  data: any
}

export default {
  set(key: string, data: any, expire?: number) {
    let cache: IData = { data }
    if (expire) {
      cache.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(cache))
  },
  get(key: string): string | null {
    const cacheStore = localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const explore = cache?.expire
      if (explore && explore < new Date().getTime()) {
        localStorage.removeItem(key)
        return null
      }
      return cache.data
    }
    return null
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}
