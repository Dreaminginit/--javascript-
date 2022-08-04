/**
 * 用来存放登录与注册的路由模块，供 app.js 模块进行调用
 */
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 调用schema文件user里需要的验证规则对象
const { regusern_schema } = require('../schema/user')
const { login_schema } = require('../schema/user')

// 注册新用户路由
// 3. 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证
// 3.1 数据验证通过后，会把这次请求流转给后面的路由处理函数
// 3.2 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件中进行处理
router.post('/reguser', expressJoi(regusern_schema), userHandler.regUser)

// 登录路由
router.post('/login', expressJoi(login_schema), userHandler.login)

module.exports = router