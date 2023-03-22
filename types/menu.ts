import { RouteLocationNormalizedLoaded } from 'vue-router'
//菜单类型
export interface Menu {
  title?: string
  icon?: string
  isClick?: boolean
  route?: string
}
//父菜单类型
export interface IMenu extends Menu {
  children?: Menu[]
}
