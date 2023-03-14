import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
export const routerStore = defineStore('router', {
  state: () => {
    return {
      routes: getRoutes(),
    }
  },
  getters: {},
})

function getRoutes() {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter((item) => item.children.length && item.meta.show)
    .map((route) => {
      route.children = route.children.filter((route) => route.meta?.show)
      return route
    })
    .filter((item) => item.children.length)
  return routes
}
