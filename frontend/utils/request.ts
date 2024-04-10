import axios, { AxiosRequestConfig } from 'axios'
import toast from '@/utils/toast'
import I18n from '@/i18n'

// create an axios instance
const service = axios.create({
  timeout: 60000, // request timeout
})

const headers = service.defaults.headers
headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

service.interceptors.request.use(
  (config: any) => {
    // set headers language
    if (config?.headers) {
      config.headers['lang'] = I18n.language
    }
    config.toastErr = config.toastErr ?? true
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  (response: any) => {
    const { data, config } = response

    if (!data.success && config.toastErr) {
      toast.error(data.message)
    }
    return data
  },
  error => {
    const { config, response } = error
    if (config.toastErr && config.url && response?.config) {
      if (response.message) toast.error(response.message)
      return Promise.resolve(response?.data)
    }
    return Promise.resolve(response?.data || response)
  },
)

export default service

interface iRequestConfig extends AxiosRequestConfig {
  toastErr?: boolean
}

/* export request methods */
export const request = {
  get<T = any>(url: string, config?: iRequestConfig): Promise<T> {
    return service.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: iRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
}
