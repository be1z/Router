import store from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      const token = store.get('token')?.token
      if (this.isLogin(to, token) == false) return { name: 'login' }
      if (this.isGuest(to, token) == false) return { name: 'home' }
    })
  }
  //
  private isGuest(to: RouteLocationNormalized, token: any): Boolean {
    return Boolean(!to.meta?.guest || (to.meta.guest && !token))
  }

  private isLogin(to: RouteLocationNormalized, token: any): Boolean {
    return Boolean(!to.meta?.auth || (to.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
