//对axios进行二次封装
//主要是用到请求和响应拦截器
import axios from 'axios';
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import 'nprogress/nprogress.css'

//1利用axios对象方法create，去创建一个axios示例
//request就是axios

const request = axios.create({
  //基础路径：发请求的时候路径当中会出现api
  baseURL:'/mock',
  //请求超时时间
  timeout:5000,
})

//请求拦截器：在发送请求之前做一些事情
request.interceptors.request.use((config)=>{
  //config：配置对象，对象里面有一个属性很重要
  //进度条开始动
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