import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alisa'
import { parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins/index'


export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
  }
}
