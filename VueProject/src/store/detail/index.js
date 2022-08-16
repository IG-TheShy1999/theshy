import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
// 封装身份模块uuid-生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'


const state ={
  goodInfo:{},
  // 临时身份
  uuid_token:getUUID()
}
const mutations ={
  GETGOODINFO(state,goodInfo){
    state.goodInfo = goodInfo
  }
}
const actions ={
  // 获取产品信息的action
  async getGoodInfo({commit}, skuId){
    let result = await reqGoodsInfo(skuId);
    if(result.code==200){
      commit('GETGOODINFO',result.data)
    }
  },
  // 将产品添加到购物车中||修改一个产品的个数 

  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    // 发请求：前端带参数到服务器，存储成功了，没有返回数据
    // 不需要仓库存储数据了
    let result =   await reqAddOrUpdateShopCart(skuId,skuNum);
    if (result.code==200) {
      return 'ok'
      
    }else{
      return Promise.reject(new Error('false'))
    }
  }
}
const getters ={
  categoryView(state){
    //state.goodInfo初始状态是空对象，空对象的categoryView属性值为undefined所以要加（  ||{}  ）
    return state.goodInfo.categoryView || {} 
  },
  skuInfo(state){
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList||[];
  }
}


export default{
  state,
  mutations,
  actions,
  getters
}