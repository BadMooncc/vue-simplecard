// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store/';
import axiosConfig from './config/axiosConfig';
import rem from './assets/js/rem.js';
import '@/assets/js/common.js';
import axiosConf from '../config/axios'

Vue.use(axiosConfig);
axiosConf()
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
// console.log(router)
// axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的

// axios.interceptors.request.use(function (config) { // 配置发送请求的信息
//   store.dispatch('loadShow');
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use((response) => { // 配置请求回来的信息
//   setTimeout(() => {
//     store.dispatch('loadHide');
//   }, 800);
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });

Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    // console.log(binding);
  }
});
Vue.directive('demo2', function (el, binding) {
  // console.log(binding,'demo2');
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
// 11
// 22
// 33