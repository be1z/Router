//vite插件配置
import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'

import { setupMockPlugin } from './mock'
export default function setupPlugins(isBuild: Boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugin(isBuild))
  return plugins
}
