import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  //挂载路由
  setupRouter(app)
  //路由完全挂载完毕
  await router.isReady()
  app.mount('#app')
}

bootstrap()
