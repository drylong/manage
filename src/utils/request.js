// 引入axios模块
import axios from 'axios';

const axiosInstance = axios.create( {
  // baseURL: 'http://localhost:666'
  baseURL: 'http://localhost:666'
});

export default axiosInstance;