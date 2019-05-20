$(function(){
   
//   var index =location.href.indexOf('?')
//   var routername
//   if( index == -1){
//         routername=location.href.substring(location.href.lastIndexOf('/')+1)
//      }else{
//        routername=location.href.substring(location.href.lastIndexOf('/')+1,index)
//     }
    //  var routername =itcast.getRouterName(location.href)
    // // 2.获取到当前元素，为元素进行相关设置'
    // var menu_posts=$('#menu-posts')
    // if(routername =='posts' ||routername =='post-add' || routername =='categories'){
    //     menu_posts.addClass('in')
    //     menu_posts.attr('aria-expanded',true)
    // }
    // //设置也需要相同的设置
    // var menu_settings=$('#menu-settings')
    // if(routername =='nav-menus' ||routername =='slides' || routername =='settings'){
    //     menu_settings.addClass('in')
    //     menu_settings.attr('aria-expanded',true)
    // }
    // $('#'+routername).addClass('active')
    var routername = itcast.getRouterName(location.href)
    
    // 2.获取到当前元素，为元素进行相关设置
    var menu_posts = $('#menu-posts')
    if(routername == 'posts' || routername == 'post-add' || routername == 'categories'){
        menu_posts.addClass('in')
        menu_posts.attr('aria-expanded',true)
    }

    // 3.设置菜单也需要这样处理
    var menu_settings = $('#menu-settings')
    if(routername == 'nav-menus' || routername == 'slides' || routername == 'settings'){
        menu_settings.addClass('in')
        menu_settings.attr('aria-expanded',true)
    }

    // 为当前li元素添加样式
    $('li').removeClass('active')
    $('#'+routername).addClass('active')
})