import user from '@/store/user'
import utils from '@/utils'
import { RouteRecordRaw, Router } from 'vue-router'

//获取布局路由
function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  //遍历布局文件
  const layouts = import.meta.globEager('../layouts/*.vue')

  Object.entries(layouts).forEach(([k, v]) => {
    const route = getRouteByModule(k, v)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

//生成子路由

function getChildrenRoutes(layoutroute: RouteRecordRaw) {
  const views = import.meta.globEager('../views/**/*.vue')
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([k, v]) => {
    if (k.includes(`../views/${layoutroute.name as string}`)) {
      routes.push(getRouteByModule(k, v))
    }
  })
  return routes
}

//生成布局格式
function getRouteByModule(k: string, v: any) {
  //匹配位置
  const path = k.replace(/.+layouts\/|.+views\/|\.vue/gi, '')

  const route = {
    path: `/${path}`,
    name: path.replace('/', '.'),
    component: v.default,
  } as RouteRecordRaw
  return Object.assign(route, v.default?.route)
}

//是否自动生成路由

let routes = utils.env.VITE_ROUTER_AUTOLOAD == true ? getRoutes() : ([] as RouteRecordRaw[])

function addRoutes(router: Router) {
  const userinfo = user().info

  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission
      console.log(permission)
      return permission ? userinfo?.permissions?.includes(permission) : true
    })
    return route
  })
  routes.forEach((r) => router.addRoute(r))
}

export default addRoutes
