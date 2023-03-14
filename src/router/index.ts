import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import autoload from './autoload'
import guard from './guard'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoload],
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router
