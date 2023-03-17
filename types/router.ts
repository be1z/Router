import { IMenu } from './menu'
// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    //访问权限
    permissions?: string[]
    //路由是否在菜单显示
    menu?: IMenu[]
  }
}
