import {v4 as uuidv4} from 'uuid'

// 生成一个随机字符串，每次执行都不能够发生变化，省份持久存储
export const getUUID=()=>{
  // 先看看本地存储有没有uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN');
  if (!uuid_token) {
    // 如果没有uuid，就生成一个
    uuid_token = uuidv4()
    localStorage.setItem('UUIDTOKEN',uuid_token)
  }
  //返回uuid_token
  return uuid_token;
}