import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layoutRoutes from './autoload'
import guard from './guard'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes],
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router
