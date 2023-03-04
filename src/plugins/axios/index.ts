import Axios from './axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 5000,
  headers: {},
})

export { http }
