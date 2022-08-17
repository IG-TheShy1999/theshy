### 这是一个Vue项目。
一个基于Vue.js的类电商项目，通过模块化开发实现了注册、登录、搜索、添加购物车、订单信息、订单支付和查看订单等页面。
# VueProject为项目源码。
# dist为打包后的数据。
## 技术要点：
  使用二次封装的axios向服务器获取数据
  使用mockjs模拟请求到的banner、search选项的数据
  通过多种方式传递数据，包括但不限于Prop、自定义事件、全局事件总线。
  使用VueRouter处理路由，并使用路由守卫
  使用VueX处理请求得到的数据
  使用localStorage存储uuid游客信息，存储并验证TOKEN用户登录信息。
  使用防抖和节流优化性能（商品数量）
  部分使用ElementUI组件库（个别按钮）
  使用uuid、vee-validate生成/校验数据
  使用Nprogress、Swiper、Animate.css等插件实现并美化界面
