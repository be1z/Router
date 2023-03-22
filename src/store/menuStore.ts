import { cacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import { IMenu } from '#/menu'
import { defineStore } from 'pinia'
import { useRouter, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { boolean } from 'yup'
export default defineStore('menu', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      state: false as boolean,
      route: null as null | RouteLocationNormalized,
    }
  },

  actions: {
    //初始化
    init() {
      this.getMenuByRouter()
      this.historyMenu = this.getHistoryMenu()
    },
    getHistoryMenu() {
      let routes = [] as RouteRecordRaw[]
      router.getRoutes().map((r) => routes.push(...r.children))
      let menus: IMenu[] = (utils.store.get(cacheEnum.HISTORY_MENU) as unknown as IMenu[]) ?? []
      return menus.filter((r) => {
        return routes.some((m) => m.name == r.route)
      })
    },
    //menu切换
    toggleState() {
      this.state = !this.state
    },
    setCurrentMenu(route: RouteLocationNormalizedLoaded) {
      this.menus.forEach((m) => {
        m.isClick = false
        m.children?.forEach((c) => {
          if (c.route?.name == route.name) {
            m.isClick = true
            c.isClick = true
          }
        })
      })
    },
    //移除历史菜单
    removeHistory(Menu: IMenu) {
      const index = this.historyMenu.indexOf(Menu)
      this.historyMenu.splice(index, 1)
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu)
    },
    //添加历史菜单
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return
      this.route = route
      const menu: IMenu = { ...route.meta.menu, route: route.name as string }
      const isHas = this.historyMenu.some((item) => item.route == route.name)

      if (!isHas) this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop()
      }
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu)
    },
    //获取菜单列表
    getMenuByRouter() {
      this.menus = router
        .getRoutes()
        .filter((item) => item.children.length && item.meta.menu)
        .map((route) => {
          let menu = { ...route.meta?.menu } as IMenu
          menu.children = route.children
            .filter((route) => route.meta?.menu)
            .map((route) => {
              return { ...route.meta?.menu, route: route }
            }) as unknown as IMenu[]
          return menu
        })
        .filter((menu) => menu.children?.length)
    },
  },
})
