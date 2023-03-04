import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'
export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss()
}

//自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/form/*.vue')

  Object.keys(components).forEach((k) => {
    const name = k.split('/').pop()?.split('.').shift()!

    app.component(_.camelCase(name), components[k]!.default)
  })
}
