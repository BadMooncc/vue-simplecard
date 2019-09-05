import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import { Loading } from "element-ui";

const service = axios.create({
  timeout: 5000
});

let loadingInstance;

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    loadingInstance = Loading.service({
      //加载loading
      fullscreen: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 1)"
    });
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    loadingInstance.close(); //关闭loading
    if (response.data.code == "200") {
      return response.data.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
