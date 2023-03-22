import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }
  //封装axios请求
  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.instance.request<D>(config)
        return resolve(result.data)
      } catch (error) {
        reject(error)
      }
    })
  }
  //初始化
  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
  //请求拦截器
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
  //相应拦截器
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
}
