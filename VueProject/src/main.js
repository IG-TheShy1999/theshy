import Vue from 'vue';
import App from './App.vue';


import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav)
//注册轮播图组件
import Carousel from '@/components/Carousel';
Vue.component(Carousel.name,Carousel)
// 分页器
import Pagination from '@/components/Pagination';
Vue.component(Pagination.name,Pagination)
// 引入Element UI
import { Button,MessageBox } from 'element-ui';
// 注册全局组件
Vue.component(Button.name, Button);
// ElementUI注册组件的时候还有一种写法（挂在原型上）
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;


Vue.config.productionTip = false
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';

//引入mockServe.js---mock数据
import '@/mock/mockServe';
//引入Swiper
import 'swiper/css/swiper.css';

// 接收api文件中全部请求函数
import * as API from '@/api'

import ecy from '@/assets/1.jpeg'
// 引入插件
import VueLazyload from 'vue-lazyload'
// 注册插件
Vue.use(VueLazyload,{
  // 懒加载默认图片
  loading:ecy
})
// 引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库：组件实例多一个$store属性
  store,
  // $bus配置
  beforeCreate() {
    Vue.prototype.$bus = this ;
    Vue.prototype.$API = API ;

  },

}).$mount('#app')
