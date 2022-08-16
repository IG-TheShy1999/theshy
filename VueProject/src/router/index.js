//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
//使用插件
Vue.use(VueRouter);


let originPush = VueRouter.prototype.push;



VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}



let router = new VueRouter({
  mode: 'hash',
  //配置路由
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

// 全局守卫
router.beforeEach(async (to, from, next) => {
  // to:可以获取到你要跳转到那个路由信息
  // from可以获取到你从那个路由来的信息
  // next：放行函数   next()放行 next('/path')放行到指定的路由      next(false)
  // next();
  // 用户登陆了就会有token，相反，未登录就不会有token
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name

  if (token) {
    if (to.path == '/login') {
      next('/')
    } else {
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo');
          next()
        } catch (error) {
          alert('登录已过期');
          // 清楚token
          await store.dispatch('userLogout')
          next('/login')
        }
      } 
    }
  } else {
    //未登录状态 不能去 trade/pay/paysuccess/center/order
    let toPath = to.path;
    if (toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1) {
      alert('你还没登录呢!')
      next('/login?redirect='+toPath)
    }else{
      next()
    }
  }
})

export default router;