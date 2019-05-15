// 创建express
var  express =require('express')
// 引入路由
var router=require('./router')
// 引入ejs
var ejs = require('ejs')

var app =express()
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})
// 静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// 配置模块引擎为ejs
app.set('view engine','ejs')
// 下面这个配置的作用是配置ejs的模板文件夹，ejs会自动的去指定的目录下寻找页面文件
app.set('views',__dirname + '/views')

// 使用use中间件在当前应用上挂载路由配置
// app.use(router)  
app.use(router)
