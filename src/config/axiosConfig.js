import axios from 'axios';
const axiosConfig = {};
axiosConfig.install = function () {
  axios.defaults.baseURL = 'http://result.eolinker.com';
};

export default axiosConfig;
