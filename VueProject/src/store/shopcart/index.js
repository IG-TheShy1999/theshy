import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";



//state:仓库存储数据的地方
const state = {
  cartList: []
}
//mutations:修改state的唯一手段
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
}
//action:处理action,可以书写自己的业务逻辑也可以处理异步
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    };
  },
  // 删除购物车某个产品
  async deleteCartBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('false'));
    }
  },
  // 修改购物车某个商品选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('false'));
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    // context:小仓库，commit【提交mutations修改state】，getters【计算属性】，dispatch【派发action】，state【当前仓库数据】
    // 获取购物车中全部产品（数组）
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartBySkuId', item.skuId) : '';
      //  将每一次返回的Promise都添加到数组中
      PromiseAll.push(promise);
    });
    // 只要全部的p1|p2...都成功，返回结果即为成功
    // 如果有一个失败，返回结果即为失败结果
    return Promise.all(PromiseAll)
  },
  // 修改全部产品勾选状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    // 数组
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
      promiseAll.push(promise);
    })
    // 最终返回的结果
    return Promise.all(promiseAll);
  }
}
//getters:理解为计算属性用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
  //  cartInfoList(state){
  //    return state.cartList
  //  }
}

export default ({
  state,
  mutations,
  actions,
  getters
});