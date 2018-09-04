import axios from 'axios';
import store from '../store/';
const axiosConfig = {};
axiosConfig.install = function (){
  axios.defaults.baseURL = 'http://result.eolinker.com';
  axios.interceptors.request.use(function (config) {  // 配置发送请求的信息
    store.dispatch('loadShow');  
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) { // 配置请求回来的信息
    setTimeout(function (){
      store.dispatch('loadHide');
    }, 800)
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
}

export default axiosConfig;
