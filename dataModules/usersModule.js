// 操作数据库
var mysql = require('mysql')
var connection =mysql.createConnection({
   host:'localhost',//主机或IP：127.0.0.1 、 localhost
   user:'root',// 数据库用户名
   password:'root',  // 数据库密码
   database:'baixiu'  // 你要操作的数据库名称
})
//根据邮箱查询数据
exports.getUserByEmail=(email,callback)=>{
   var sql ='select * from users where email = ?'
   connection.query(sql,[email],(err,results)=>{
      if(err){
           callback(err)
      }else{
          callback(null,results[0])
      }
   })
}
