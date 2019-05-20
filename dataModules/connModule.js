// 这个文件是添加对uesrs表的所有操作
// 查询数据库
var mysql=require('mysql')
var connection=mysql.createConnection({
    host:'localhost',//配置
    user:'root',//用户名
    password:'root',//密码
    database:'baixiu'//操作的文件
})
//暴露数据库
module.exports = connection