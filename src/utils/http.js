import axios from 'axios'

// axios 配置
const defaultBaseUrl = 'http://localhost:8080'
axios.defaults.timeout = 15000
axios.defaults.baseURL = defaultBaseUrl // 数据接口域名统一配置.env

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers = {}
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const data = error.response.data
    return Promise.reject(data || error)
  }
)

export default axios

/**
 * fetch 请求方法
 * @param {*} url
 * @param {*} params
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * post 请求方法，发送数据格式 json
 * @param {*} url
 * @param {*} data
 */
export function post (
  url,
  data = {},
  config = {
    transformRequest: [
      function (fData, headers) {
        headers['Content-Type'] = 'application/json'
        return JSON.stringify(fData)
      }
    ]
  }
) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/**
 * patch 请求方法，发送数据格式 json
 * @param {*} url
 * @param {*} data
 */
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data, {
        transformRequest: [
          function (fData, headers) {
            headers['Content-Type'] = 'application/json'
            return JSON.stringify(fData)
          }
        ]
      })
      .then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        }
      )
  })
}

export function del (url, data) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { data }).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

// 上传图片
export function postImage (url, data) {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    formData.append('file', data)
    axios.post(url, formData, config).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
