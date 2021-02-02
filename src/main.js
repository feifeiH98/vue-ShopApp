// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import './mock/MockServer'
import loading from './common/imgs/loading.gif'
import './filters'  //加载过滤器

// 注册成全局组件标签
Vue.component(Button.name,Button)  // <mt-button>

Vue.use(VueLazyload, {  //内部自定义一个指令 lazy
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
