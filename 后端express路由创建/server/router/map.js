let express = require("express")
let router = express.Router()
let mapData = require("../mock/china.json")
router.get("/data",(req,res)=>{
  // res.send({msg:"我是four的路由地址",chartFour:"fourData"}) 使用引号则是字符串
  res.send({msg:"我是china的路由地址",chartData:mapData})
})
module.exports = router