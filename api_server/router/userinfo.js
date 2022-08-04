/**
 * 用来存放用户信息的路由模块，供 app.js 模块进行调用
 * 客户端从服务器获取用户信息
 */

// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi')

// 导入用户信息的处理函数模块
const userinfo_handler = require('../router_handler/userinfo')
// 导入更新用户信息所需要的验证规则对象
const { update_userinfo_schema } = require('../schema/user')
// 导入重置用户密码所需要的验证规则对象
const { update_password_schema } = require('../schema/user')
// 导入更换用户头像所需要的验证规则对象
const { update_avatar_schema } = require('../schema/user')

// 获取用户的基本信息的路由
router.get('/userinfo',userinfo_handler.getUserInfo)
// 更新用户的基本信息的路由
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)
// 重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)
// 更新用户头像的路由
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)

// 向外共享路由对象
module.exports = router