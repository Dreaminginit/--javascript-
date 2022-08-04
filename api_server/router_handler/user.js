/**
 * 用来存放登录与注册的路由处理函数模块
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 导入数据库操作模块
const db = require('../mydb/index')
// 导入用户加密 bcryptjs 包
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
// 导入全局配置文件
const config = require('../config')
// 注册用户的处理函数
exports.regUser = (req, res) => {

    // 获取客户端提交到服务器的用户信息
    const userinfo = req.body

    // // 对客户端提交的信息进行合法性校验
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不能为空！')//status:获取当前服务器的响应状态
    // }

    // 定义查询user表username的SQL语句 查询用户名是否被占用
    const sql = `select * from users where username=?`
    db.query(sql, [userinfo.username], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
          return res.cc(err)
        }
        // 用户名被占用
        if (results.length > 0) {
          return res.cc('用户名被占用，请更换其他用户名！')
        }

        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串 bcrypt.hashSync(明文密码, 随机盐的长度)
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        // 定义插入用户的 SQL 语句
        const sql = 'insert into users set ?'
        // 调用 db.query() 执行 SQL 语句，插入新用户
        db.query(sql, { username: userinfo.username, password: userinfo.password , phonenumber: userinfo.phonenumber}, function (err, results) {
            // 执行 SQL 语句失败
            if (err) return res.cc(err)
            // SQL 语句执行成功，但影响行数不为 1
            if (results.affectedRows !== 1) {
              return res.cc('注册用户失败，请稍后再试！')
            }
            // 注册成功
            res.cc('注册成功！', 0)
          })
      })
  }
  
  // 登录的处理函数
  exports.login = (req, res) => {
    //   获取客户端提交到服务器的表单数据
    const userinfo = req.body
    
    // 定义users数据表中username的 SQL 语句 查询用户名是否存在
    const sql = `select * from users where username=?`
    db.query(sql, userinfo.username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('该用户不存在！')

        // TODO：判断用户输入的登录密码是否和数据库中的密码一致，
        // 调用 bcrypt.compareSync(用户提交的密码, 数据库中的密码) 方法比较密码是否一致
        // 返回值是布尔值（true 一致、false 不一致）
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('登录失败！')
        }
        // 通过 ES6 的高级语法，快速剔除 密码password 和 头像user_pic 及手机号码phonenumber 的值
        const user = { ...results[0], password: '', phonenumber: '', user_pic: '' }
        // 将用户信息对象userinfo加密成 Token 字符串
        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h', // token 有效期为 10 个小时
        })
        // 将生成的 Token 字符串响应给客户端
        res.send({
            status: 0,
            message: '登录成功！',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr,
          })
      })
  }