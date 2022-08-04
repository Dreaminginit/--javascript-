/**
 * 在这里定义和用户相关的数据库信息，供其他模块进行调用
 */
// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'my_db_01',
  })
  
  // 向外共享 db 数据库连接对象
  module.exports = db