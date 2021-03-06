// //操作分类的控制器‘
// var cateController = require('../dataModules/cateModule')
// var common =require('./common')
// // 获取所有数据
// exports.getAllCateList=(req,res)=>{
//      // 调用分类数据模块获取所有数据
//     cateController.getAllList((err,data)=>{
//         if(err){
//             res.end('404')
//         }else{
//             res.json(data)
//         }
//     })
// }
// //实现分类的数据提交
// exports.updateCategories=(req,res)=>{
//     //接收用户数据
//     var obj = req.body
//     cateController.updateCategories(obj,(err)=>{
//         if(err){
//            res.json({
//                code:201,
//                msg:'编辑失败'
//            })
//         }else{
//             res.json({
//                 code:200,
//                 msg:'编辑成功'
//             })
//         }
//     })
// }
// //实现分类添加数据
// exports.addCategories=(req,res)=>{
//     //接收用户数据
//     var obj = req.body
//     cateController.addCategories(obj,(err)=>{
//         if(err){
//            res.json({
//                code:201,
//                msg:'添加失败'
//            })
//         }else{
//             res.json({
//                 code:200,
//                 msg:'添加成功'
//             })
//         }
//     })

// }
// //根据id删除分类数据
// exports.delCategoryById=(req,res)=>{
//     //接收用户数据
//     var id = common.getParameter(req.url).id
//     cateController.delCategoryById(obj,(err)=>{
//         if(err){
//            res.json({
//                code:201,
//                msg:'删除失败'
//            })
//         }else{
//             res.json({
//                 code:200,
//                 msg:'删除成功'
//             })
//         }
//     })
// }
var cateController = require('../dataModules/cateModule')
var common = require('./common')
// 获取所有分类数据
exports.getAllCateList = (req,res) => {
    // 调用分类数据模块获取所有数据
    cateController.getAllList((err,data) => {
        if(err){
            res.end('404')
        }else{
            res.json(data)
        }
    })
}

// 实现分类数据的编辑提交
exports.updateCategories = (req,res) => {
    // 接收用户数据
    var obj = req.body
    // 调用数据模块进行编辑操作
    cateController.updateCategories(obj,(err) => {
        if(err){
            res.json({
                code:201,
                msg:'编辑失败'
            })
        }else{
            res.json({
                code:200,
                msg:'编辑成功'
            })
        }
    })
}

// 实现分类数据的编辑提交
exports.addCategories = (req,res) => {
    // 接收用户数据
    var obj = req.body
    // 调用数据模块进行编辑操作
    cateController.addCategories(obj,(err) => {
        if(err){
            res.json({
                code:201,
                msg:'添加失败'
            })
        }else{
            res.json({
                code:200,
                msg:'添加成功'
            })
        }
    })
}

// 根据id删除分类数据
exports.delCategoryById = (req,res) => {
    var id = common.getParameter(req.url).id
    // 接收用户数据
    // 调用数据模块进行编辑操作
    cateController.delCategoryById(id,(err) => {
        if(err){
            res.json({
                code:201,
                msg:'删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
    })
}