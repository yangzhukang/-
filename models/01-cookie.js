var express = require('express')
var querystring = require('querystring')
var app = express()
app.listen(3008,() => {
    console.log('http://127.0.0.1:3008')
})
app.get('/',(req,res) => {
    // 判断是否有登陆状态
    // 2.获取之前可能存储的登陆状态
    var mycook = req.headers.cookie  // islogin=true
    var obj = querystring.parse(mycook)
    // console.log(obj)
    if(obj.islogin && obj.islogin == 'true'){
        res.end('welcome back')
    }else{
        // 如果第一次访问，显示：first come
        // 如果有登陆状态，那么就显示：welcome back
        // 1.存储cookie数据:通过响应头的方式写入cookie  
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8',
            'Set-Cookie':'islogin=true'
        })
        res.end('first come')
    }
})