var userModule =require('../dataModules/usersModule')
//实现登录验证
exports.login=(req,res)=>{
    userModule.getUserByEmail(req.body.email,(err,data)=>{
        if(err){
            res.json({
                code:'201',
                msg:'服务异常'
            })
        }else{
            if(data){
            if(data.password == req.body.password){
                 res.json({
                     code:200,
                     msg:'登录成功',
                 })
              }else{
                res.json({
                    code:201,
                    msg:'密码错误',
                })
            }
          }else{
              res.json({
                  code:'201',
                  msg:'邮箱输入错误'
              })
          }
        }
    })
}