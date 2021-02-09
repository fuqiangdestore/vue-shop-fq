import axios from 'axios'

const myHttpServer = {}

myHttpServer.install = function (Vue) {
  axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
  // 4. 添加实例方法
  Vue.prototype.$http = axios
}

export default myHttpServer
