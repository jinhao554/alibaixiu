//封装工具函数
//获取url中的路由部分
// var itcast={
//    getRouterName(urlSter){
//     var index =urlSter.indexOf('?')
//     var routername
//     if( index == -1){
//           routername=urlSter.substring(urlSter.lastIndexOf('/')+1)
//        }else{
//          routername=urlSter.substring(urlSter.lastIndexOf('/')+1,index)
//       }
//     return routername
//    }
// }
var itcast = {
   // 获取url中的路由部分
   // http://127.0.0.1:3004/admin/post-add?id=1
   // getRouterName:function(){},
   // getRouterName:() =>{},
   getRouterName(urlStr){
       var index = urlStr.indexOf('?')
       var routername
       if(index == -1){
           routername = urlStr.substring(urlStr.lastIndexOf('/')+1)
       }else{
           routername = urlStr.substring(urlStr.lastIndexOf('/')+1,index)
       }
       return routername
   }
}