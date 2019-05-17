var URL_name={
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