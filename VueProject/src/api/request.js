//对axios进行二次封装
//主要是用到请求和响应拦截器
import axios from 'axios';
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import 'nprogress/nprogress.css'
//引入store
import store from '@/store'

//1利用axios对象方法create，去创建一个axios示例
//request就是axios

const request = axios.create({
  //基础路径：发请求的时候路径当中会出现api
  baseURL:'/api',
  //请求超时时间
  timeout:5000,
})

//请求拦截器：在发送请求之前做一些事情
request.interceptors.request.use((config)=>{
  //config：配置对象，对象里面有一个属性很重要
  //进度条开始动

  if (store.state.detail.uuid_token) {
    // 请求头添加一个字段
    config.headers.userTempId = store.state.detail.uuid_token
  }
  
  // 需要携带token给服务器
  if (store.state.user.token) {
    // 请求头添加一个字段
    config.headers.token = store.state.user.token
  }
  nprogress.start();
  return config;
}
);

request.interceptors.response.use((res)=>{
  //成功后做一些事情
  //进度条结束
  nprogress.done();
  return res.data;
},(error)=>{
  //失败后接一些事情
  return Promise.reject(new Error('false'));
});

export default request;