//发起ajax请求
$(function(){
$('.btn-primary').on('click',()=>{
  //  console.log(123)
// 收集数据
 var email=$('#email').val()
 var password= $('#password').val()
 //发起ajax请求
 $.ajax({
     type:'post',
     url:'/login',
     data:{
       email:email,
       password:password,
     },
     dataType:'json',
       success:function(result){
        //  console.log(result)
        if(result.code == 201){
          $('.alert-danger').css('display','block')
          $('.alert-danger span').text(result.msg)
        }else{
          location.href='/admin'
        }
     }
     
     
   })

 })
})