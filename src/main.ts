import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  //挂载插件
  setupPlugins(app)

  //挂载路由
  setupRouter(app)
  //路由完全挂载完毕
  await router.isReady()
  app.mount('#app')
}

bootstrap()
