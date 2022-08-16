//通过mockjs插件实现模拟数据

//引入mockjs模块
import Mock from 'mockjs'

//先把JSON数据格式引入
//图片、JSON数据格式默认暴露
import banner from './banner.json'
import floor from './floor.json'


Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});






