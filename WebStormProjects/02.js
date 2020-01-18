const http = require('http')

http.createServer(function(request, response){
    //发送 HTTP 头部
    //HTTP 状态值: 200: OK
    //内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'})
    //发送相应数据 'Hello World'
    response.end('Hello Server')
}).listen (8888)

//继续打印信息
console.log('Server runing at local host 8888')