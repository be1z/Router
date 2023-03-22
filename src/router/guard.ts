import { cacheEnum } from './../enum/cacheEnum'
import user from '@/store/user'
import store from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'
import utils from '@/utils'
import menuStore from '@/store/menuStore'

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(async (to, from) => {
      const token = store.get(cacheEnum.TOKEN_KEY)?.token

      if (this.isLogin(to, token) == false) return { name: 'login' }
      if (this.isGuest(to, token) == false) return { name: 'home' }
      // await this.getUserInfo(token)
    })
  }
  //获取用户信息
  public getUserInfo(token: string | null) {
    if (token) {
      return user().getUserInfo()
    }
  }
  //游客
  private isGuest(to: RouteLocationNormalized, token: any): Boolean {
    return Boolean(!to.meta?.guest || (to.meta.guest && !token))
  }
  //登陆用户访问
  private isLogin(to: RouteLocationNormalized, token: any): Boolean {
    const status = Boolean(!to.meta?.auth || (to.meta.auth && token))

    if (status == false) utils.store.set(cacheEnum.REDIRECT_ROUTER_NAME, to.name)
    return status
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
