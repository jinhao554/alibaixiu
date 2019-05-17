//封装工具函数
//获取url中的路由部分
var itcast={
   getRouterName(urlSter){
    var index =urlSter.href.indexOf('?')
    var routername
    if( index == -1){
          routername=urlSter.href.substring(urlSter.href.lastIndexOf('/')+1)
       }else{
         routername=urlSter.href.substring(urlSter.href.lastIndexOf('/')+1,index)
      }
    return routername
   }
}