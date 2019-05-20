//文章分类控制器
var postsModule = require("../dataModules/postModule");
module.exports = {
  //获取文章分类的所有数据
  getAllPostList(req, res) {
    // 调用数据模块获取所有文章数据
    postsModule.getAllPostList(req.query, (err, data) => {
      if (err) {
        res.json({
          code: 404,
          msg: "err"
        });
      } else {
        res.json({
          code: 200,
          data: data
        });
      }
    });
  }
};
