// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/reset.css'
import less from 'less'
// 插件方式 axios
import myHttpServer from '../src/plugins/http.js'

Vue.use(less)
Vue.use(ElementUI)
Vue.use(myHttpServer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
