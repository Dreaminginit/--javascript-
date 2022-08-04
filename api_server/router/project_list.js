/**
 * 用来存放获取项目数据列表的路由模块，供 app.js 模块进行调用
 */

// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入文章分类的路由处理函数模块
const project_list_handler = require('../router_handler/project_list')

// 获取文章分类的列表数据
router.get('/list',  project_list_handler.getProjectList)

// 向外共享路由对象
module.exports = router