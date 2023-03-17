import { Ilogin } from './../apis/userApi'
import utils from '@/utils'
import userApi from '@/apis/userApi'
import user from '@/store/user'
import router from '@/router'
import { cacheEnum } from './../enum/cacheEnum'
import store from './store'

export async function login(data: Ilogin) {
  const {
    result: { token },
  } = await userApi.login(data)
  utils.store.set(cacheEnum.TOKEN_KEY, {
    expire: 1800,
    token,
  })

  const routerName = utils.store.get(cacheEnum.REDIRECT_ROUTER_NAME) ?? 'home'
  console.log(routerName)
  router.push({ name: routerName })
}

export function logout() {
  store.remove(cacheEnum.TOKEN_KEY)
  router.push('/')
  user().info = null
}
