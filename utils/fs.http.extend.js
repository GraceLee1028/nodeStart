//客户端访问大文件，readFile()和createReadStream()的区别
const fs = require("fs");
const server = require("http").createServer()
server.on("request",(req,res)=>{
  const add = "F:/lifeng2022/软件/ToDesk_Setup.exe"
  //方式一: fs.createReadStream
  // const src = fs.createReadStream(add)
  // src.pipe(res)
  //方式二：fs.readFile()
  fs.readFile(add,(err,data)=>{
    if(err){throw err}
    res.end(data)
  })
})


server.listen(8080)