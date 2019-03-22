// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  //引入组件
import Axios from 'axios'
import router from './router'


Vue.prototype.$axios = Axios
Vue.config.productionTip = false //开发时配置暂时可忽略

/* eslint-disable no-new */
new Vue({  //通过new来创建vue实例
  el: '#app', //绑定一个元素，app的根视图
  components: { App }, //创建组件名字
  template: '<App/>', //加载视图
  router //注入
})
