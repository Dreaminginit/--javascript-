/**
 * 用来存放获取项目数据列表的路由函数处理模块，供 router文件夹里的project_list.js 模块进行调用
 */

// 导入数据库操作模块
const db = require('../mydb/index')

// 获取文章分类列表数据的处理函数
exports.getProjectList = (req, res) => {
    // 根据分类的状态，获取所有未被删除的分类列表数据
    // is_delete 为 0 表示没有被 标记为删除 的数据
    // 根据id升序排序，定义SQL语句
    const sql = 'select * from project_list where is_delete=0 order by id asc'
    // 调用 db.query() 执行 SQL 语句
    db.query(sql, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
      
        // 2. 执行 SQL 语句成功
        res.send({
          status: 0,
          message: '获取项目数据分类列表成功！',
          data: results,
        })
    })
  }