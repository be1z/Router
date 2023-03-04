// 对组件中 env进行类型转换
import _ from 'lodash'
class Helper {
  public env = {} as ImportMetaEnv
  constructor() {
    this.env = this.getEnvs()
  }
  private getEnvs(): ImportMetaEnv {
    const envs: any = _.cloneDeep(import.meta.env)
    Object.entries(import.meta.env as Record<string, any>).forEach(([k, v]) => {
      if (v == 'true' || v == 'false') {
        envs[k] = v == 'true' ? true : false
      } else if (/^\d+$/.test(v)) envs[k] = Number(v)
      else if (v == 'null') envs[k] = 'null'
      else if (v == 'undefined') envs[k] = 'undefined'
    })
    return envs
  }
}
const helper = new Helper()
const env = helper.env
export default helper

export { env }
