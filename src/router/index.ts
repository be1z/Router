import user from '@/store/user'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import autoload from './autoload'
import guard from './guard'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})

export async function setupRouter(app: App) {
  await user().getUserInfo()
  autoload(router)
  guard(router)
  app.use(router)
}
export default router
