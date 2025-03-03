let express = require("express")
// let router = express.router
let router = express.Router()
let oneData = require("../mock/one.json")
router.get("/data",(req,res)=>{
  // res.send({msg:"我是one的路由地址",chartData:"oneData"}) 这边oneData加了""就不是数据而是字符串了
  res.send({msg:"我是one的路由地址",chartData:oneData})
})
module.exports = router