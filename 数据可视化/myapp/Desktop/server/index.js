let express = require("express")
let app = express()
//设置跨域
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderField');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // 继续处理下一个中间件
  next();
});

let chartOne =  require("./router/one")
let chartTwo =  require("./router/two")
let chartThree =  require("./router/three")
let chartFour =  require("./router/four")
let chartMap =  require("./router/map")

app.use('/one',chartOne)
app.use('/two',chartTwo)
app.use('/three',chartThree)
app.use('/four',chartFour)
app.use('/map',chartMap)

app.listen(9999)