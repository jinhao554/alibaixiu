//分类文章操作数据库
var connection = require('./connModule')

module.exports={
    getAllPostList(query,callback){
           // 多表查询
          //- limt n:从索引0开始查询n条记录
         // - limit n,m:从索引n开始查询m条记录
        //  进行分页查询，必须让用户传入两个参数：pageNum(当前页码),pageSize(每页显示的记录数)
        var sql=`select posts.id,posts.title,posts.created,posts.status,users.nickname,categories.name
                    from posts
                    inner join users on posts.user_id = users.id
                    inner join categories on posts.category_id = categories.id
                    limit ${(query.pageNum-1)*query.pageSize},${query.pageSize}`
                 
                //  console.log(sql)6
          connection.query(sql,(err,results)=>{
              console.log(results)
            if(err){
                 callback(err)
            }else{
                // callback(null,results)
                // query在进行查询的时候一次只能查询一个结果集，
                // 如果在Sql中添加多条查询语句，那么results也只能接收到一个
                    // count(*):查询所有记录的数量 
                    // count(field):查询field非空的数量
                    // select count(*)cnt from posts 
                sql='select count(*) cnt from posts'
                connection.query(sql,(err1,results1)=>{
                    if(err){
                        callback(err)
                    }else{
                        callback(null,{data:results,total:results1[0].cnt})
                    }
                })
          }
       })
    }  
}

