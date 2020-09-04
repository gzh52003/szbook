import axios from 'axios'


const source = axios.CancelToken.source();

const request = axios.create({
  baseURL:"http://42.194.179.50/api",
  timeout:8*1000,
  withCredentials:false,
  headers:{'Content-Type': 'application/json;charset=UTF-8'},
  cancelToken:source.token
})
request.source = source;

export default request;