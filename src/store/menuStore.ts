import { cacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import { IMenu } from '#/menu'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
export default defineStore('menu', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
    }
  },
  actions: {
    init() {
      this.getMenuByRouter()
      this.historyMenu = (utils.store.get(cacheEnum.HISTORY_MENU) as unknown as IMenu[]) ?? []
    },
    removeHistory(Menu: IMenu) {
      const index = this.historyMenu.indexOf(Menu)
      this.historyMenu.splice(index, 1)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return
      const menu: IMenu = { ...route.meta.menu, route: route.name as string }
      const isHas = this.historyMenu.some((item) => item.route == route.name)

      if (!isHas) this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop()
      }
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu)
    },
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
