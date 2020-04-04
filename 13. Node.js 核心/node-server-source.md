### Node服务源代码

```javascript
/* node.js搭建简易Web服务器，用来部署网站 */

const http = require('http')
const fs = require('fs')
const url = require('url')

// 创建node-http服务器
http.createServer((req, res) => {
  // 获取用户输入的网址(如http://localhost:3000/myblog/index.html)中的路径
  let { pathname } = url.parse(req.url)
  // 若pathname='/myblog/index.html',则读取./webapp/myblog/index.html文件
  fs.readFile(`./webapps${pathname}`, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('404 not found')
    } else {
      res.end(data) // http请求成功时返回index.html文件内容
    }
  })
}).listen(3000) // 该服务在3000端口运行

console.log('server is listenning on port 3000')
```

