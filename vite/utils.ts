//env类型转换
import _ from 'lodash'
export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([k, v]) => {
    if (v == 'true' || v == 'false') {
      envs[k] = v == 'true' ? true : false
    }
    console.log(env)
    if (/^\d+$/.test(v)) {
      envs[k] = parseInt(v)
    }
  })
  return envs
}
