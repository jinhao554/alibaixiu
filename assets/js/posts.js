$(function(){

      //设置一页多少行
      var pageSize =5
      //将pageSize和pageNum设置为全局变量，方便以后更改
      //设置页数
      var pageNum =1
  function initData(){
        $.ajax({
           type:'get',
           url:'/getAllPostList',
           data:{
            pageNum,
            pageSize
            
           },
           dataType:'json',
           success:function(results){
            //  console.log(results)
            var html=template('postListTemp',results.data)
            $('tbody').html(html)
            // 还要生成分页结构
            setPagnator(Math.ceil(results.data.total/pageSize))
           } 
        })
    }
    initData()
        //- bootstrapMajorVersion：重要属性，必须正确的设置，如果错误后期不能生成分页结构。
        //现在用的bootstrap是3.3.7，所以对应的分页区域的结构要使用ul
        // - currentPage:当前页码，这个页码后期需要传递给后台进行查询操作
        // - totalPages：总页数，没有总页面如何生成对应的分页结构呢
        // - onPageClicked：点击分页结构中的页码标签的时候所触发的事件
        //   - 参数说明：event, originalEvent, type,page---这四个参数必须传
        //   - page:page就是当前需要获取数据的页码
            // 发起ajax请求获取文章分类内容
    function setPagnator (total){
    //    进行页面结构的初始化，并提共相关的配置
       $(".pagination").bootstrapPaginator({
        //设置版本号
        bootstrapMajorVersion: 3,
        // 显示第几页
        currentPage: pageNum,
        // 总页数
        totalPages: total,
        //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
        onPageClicked: function (event,originalEvent,type,page) {
              // page就是当前需要获取数据的页码
            //   console.log(page)
              // 修改全局的pageNum,以让我重新发起数据请求的时候能够获取到指定页码的数据
              pageNum = page
              // 再次获取数据
              initData()
        }
    })
    }
})