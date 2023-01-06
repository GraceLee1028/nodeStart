/**
 * @func 文件系统模块api
 */
const fs = require('fs');
const path = require('path');
//创建目录
fs.mkdir('config',(err)=>{
  if(err){
    if(err.code==='EEXIST'){
      console.log('config目录已存在');
      return;
    }
    throw err
  };
  console.log('成功创建目录config')
})

// readdir(): 读取目录【得到目录下有多少文件】
fs.readdir('config',(err,files)=>{
  if(err){
    throw err;
  }
  console.log('成功读取目录config')
  console.log('config目录下的文件有：',files)
})

//删除目录
fs.rmdir('config',(err)=>{
  if(err){
    console.log(err)
    if(err.code==='ENOTEMPTY'){
      console.log('目录下存在文件无法删除')
    }
    return
  }
  console.log('成功删除目录config')
})

//读取文件内容
fs.readFile('public/text.txt','utf-8',(err,data)=>{
  if(err){
    console.log('读取失败',err)
    return;
  }
  console.log('读取成功',data)
})
//writeFile：创建或者重写文件；【wbepack.config.js不存在时创建，存在时重写】
// fs.writeFile('config/wbepack.config.js','const path = require("path")',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('写入成功wbepack.config.js')
// })

// stat()：查看目录的信息
// fs.stat('config',(err,stats)=>{
//   if(err){
//     throw err;
//   }
//   console.log('成功读取目录config的信息',stats)
// })


//unlink：删除文件[异步]，unlinkSync：同步
// fs.unlink(path.join('public/text.txt'),(err)=>{
//   if(err) throw err;
//   console.log('成功删除 public/text.txt')
// })

// 文件重命名: rename
// fs.rename('public/xgyy.txt','public/text.txt',(err)=>{
//   if(err) throw err;
//   console.log('文件重命名成功')
//   //appendFile: 追加文件内容
//   fs.appendFile('public/text.txt', '小柴胡颗粒\n蒲地蓝消炎药', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });
// })

// copyFile: 复制文件；public/yxyy.txt将被创建或覆盖
fs.copyFile('public/text.txt','public/yxyy.txt',(err)=>{
  if(err) throw err;
  console.log('复制成功')
  //读取文件属性【如：文件大小】
  fs.stat('public/yxyy.txt',(err,stas)=>{
    if(err)throw err;
    console.log('文件属性：',stas)
    console.log('文件大小:',stas.size)
  })
})
//写入文件
fs.writeFile('public/style.css','html,body{margin:0;padding:0}',(err)=>{
  if(err){
    return console.log(err)
  }
  console.log('写入成功')
})


// FSWatcher类
const watcher =fs.watch('public/style.css',{encoding:'utf-8'},(eventType,filename)=>{
  if(filename){
    console.log(filename);
    console.log('监听到该文件的更改');
    console.log('停止监听更改')
    watcher.close();
  }
})

// 文件流
let rs = fs.createReadStream('public/style.css',{
  flags:'r',
  highWaterMark:2,//文件一次读取的字节数：默认64*1024【64kb】
  autoClose:true,
  start:0,
  end:10,
  encoding:'utf-8'
})

rs.on('open',()=>{
  console.log('文件打开')
})
rs.on('end',()=>{
  console.log('先执行end文件读取结束')
})
rs.on('close',()=>{
  console.log('后执行close文件关闭')
})
rs.on('data',(data)=>{
  console.log(data)
  // 暂停读取
  // rs.pause();
})
// setTimeout(()=>{
//   rs.resume();//恢复继续读取
// },1000)

