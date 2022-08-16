//api进行统一管理
import request from './request';
import mockRequests from './mockAjax'

//三级联动接口
//请求地址  /api/product/getBaseCategoryList  （get请求）无参数
//发请求 axios发请求返回结果给Promise对象 
export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })


//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner');


//获取floor
export const reqFloorList = () => mockRequests.get('/floor');


//获取搜索模块数据  （post请求） 需要参数
//params(空对象) 
export const reqGetSearchInfo = (params) => request({ url: '/list', method: 'post',data: params })

//获取商品详情 /api/item/{ skuId }（get）
export const reqGoodsInfo = (skuId) => request({ url: `/item/${ skuId }`, method: 'get' })

//  将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId,skuNum) => request({ url: `/cart/addToCart/${ skuId }/${ skuNum }`, method: 'post' })

// 获取购物车列表数据
export const reqCartList = () => request({ url: `/cart/cartList`, method: 'get' })

// 删除购物产品的接口
export const reqDeleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 切换商品选中状态
export const reqUpdateCheckedById = (skuId,isChecked) => request({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 验证码请求
export const reqGetCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

//注册
export const reqUserRegister = (data) => request({ url: `/user/passport/register`,data, method: 'post' })

//登录
export const reqUserLogin = (data) => request({ url: `/user/passport/login`,data, method: 'post' })

// 获取用户信息【带着用户token向服务器要用户信息】
export const reqUserInfo = () => request({ url: `/user/passport/auth/getUserInfo`, method: 'get' })

// 退出登录
export const reqUserLogout = () => request({ url: `/user/passport/logout`, method: 'get' })

// 获取用户地址信息
export const reqAddressInfo = () => request({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' })

// 获取用户订单信息
export const reqOrderInfo = () => request({ url: `/order/auth/trade`, method: 'get' })

// 提交订单
export const reqSubmitOrder = (tradeNo,data) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,data, method: 'post' })

// 获取支付信息
export const reqPayInfo = (orderId) => request({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 获取支付订单状态
export const reqPayStatus = (orderId) => request({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

// 个人中心我的订单信息
export const reqMyOrderList = (page,limit) => request({ url: `/order/auth/${page}/${limit}`, method: 'get' })

