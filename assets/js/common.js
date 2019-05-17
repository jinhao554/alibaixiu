//封装工具函数
//获取url中的路由部分
var itcast={
   getRouterName(urlSter){
    var index =urlSter.indexOf('?')
    var routername
    if( index == -1){
          routername=urlSter.substring(urlSter.lastIndexOf('/')+1)
       }else{
         routername=urlSter.substring(urlSter.lastIndexOf('/')+1,index)
      }
    return routername
   }
}