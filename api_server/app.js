/**
 * 定义整个后端接口的整个项目的入口文件
 */
// 导入express模块
const express = require('express')
// 导入cors中间件 解决跨域问题
const cors = require('cors')
// 导入验证规则模块
const joi = require('joi')
// 导入解析http请求中间件模块
const bodyparser = require('body-parser')


// 声明express的服务器实例
const app = express()
// 将 cors 注册为全局中间件
app.use(cors())
// // 配置解析 application/x-www-form-urlencoded 
// app.use(express.urlencoded({ extended: false }))
// 解析 application/json
app.use(bodyparser.json())
// 解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(bodyparser.urlencoded())

// 在处理函数中，需要多次调用 res.send() 向客户端响应 处理失败 的结果，为了简化代码，可以手动封装一个 res.cc() 函数
// 所有路由之前，声明一个全局中间件，为 res 对象挂载一个 res.cc() 函数
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
      res.send({
        // 状态
        status,
        // 状态描述，判断 err 是 错误对象 还是 字符串
        message: err instanceof Error ? err.message : err,
      })
    }
    next()
})
// 路由之前，配置解析 Token 的中间件
// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

// 导入用户路由模块
const userRouter = require('./router/user')
// 使用路由模块 前缀为/api
app.use('/api', userRouter)
// 导入并使用用户信息路由模块
const userinfoRouter = require('./router/userinfo')
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userinfoRouter)
// 导入并使用项目数据分类路由模块
const projectListRouter = require('./router/project_list')
// 为文章分类的路由挂载统一的访问前缀 /my/project
app.use('/my/project', projectListRouter)

// 在路由后定义全局错误级别中间件，捕获验证失败的错误，并把验证失败的结果响应给客户端
app.use(function (err, req, res, next) {
    // 数据验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获 token 身份认证失败的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err)
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function () {
    console.log('api server running at http://127.0.0.1:3000')
  })