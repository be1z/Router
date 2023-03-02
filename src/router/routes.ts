import { RouteRecord, RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/admin.vue'),
    children: [{ path: 'admin', component: () => import('@/view/home.vue') }],
  },
] as RouteRecordRaw[]
export default routes
