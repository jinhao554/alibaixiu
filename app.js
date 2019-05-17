// 创建express
var  express =require('express')
// 引入路由
var router=require('./router')
// 引入ejs
var ejs = require('ejs')
//中间件
var bodyParser = require('body-parser')
//引入express-session----中间件--拦截器
var session = require('express-session')

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


// //配置使用session
app.use(session({
    secret: 'mywords',//加盐--你可以指定你自己知道的字符串
    resave: false,//重新保存：强制会话保存即使未修改。一般默认是为true
    saveUninitialized: false,//强制”未初始化“的会话保存到存储
  }))  
  // // 添加body-parser中间件来处理参数
app.use(bodyParser.urlencoded({extended:false}))

//在expense路由中间件，所以请求必须经过.app.use((req,res,next)=>{})
app.use((req,res,next)=>{
  //判断是否登录
  if(req.session.isLogin && req.session.isLogin=='true' ||req.url.indexOf('/admin')== -1 ||req.url=='/admin/login'){
    next()
  }else{
     res.redirect('/admin/login')
  }
  // console.log(123)
})

// 使用use中间件在当前应用上挂载路由配置
// app.use(router)  
app.use(router)
