// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    show?: boolean
    title?: string
    icon?: string
    isClick?: boolean
  }
}
