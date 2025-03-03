let express = require("express")
let router = express.Router()
let fourData = require("../mock/four.json")
router.get("/data",(req,res)=>{
  // res.send({msg:"我是four的路由地址",chartFour:"fourData"}) 使用引号则是字符串
  res.send({msg:"我是four的路由地址",chartData:fourData})
})
module.exports = router