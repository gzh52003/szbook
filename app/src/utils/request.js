import axios from 'axios'


const source = axios.CancelToken.source();

const request = axios.create({
  baseURL:"http://www.ihuanu.cn/api",
  timeout:8*1000,
  withCredentials:false,
  headers:{'Content-Type': 'application/json;charset=UTF-8'},
  cancelToken:source.token
})
request.source = source;

export default request;