/**
 * @func 文件系统模块api：fs
 */
const fs = require('fs');
const path = require('path');
//1、目录的创建：fs.mkdir();目录的读取:fs.readdir();目录的删除：fs.rmdir()
fs.mkdir('config', err => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.log('config文件创建失败，config目录已存在');
    } else {
      return;
    }
  }
  console.log('目录config');
  // readdir(): 读取目录【得到目录下有多少文件】
  fs.readdir('config', (err, files) => {
    if (err) {
      console.log(err, '========读取config目录失败');
      throw err;
    }
    console.log('成功读取目录config');
    console.log('config目录下的文件有：', files);
    // fs.rmdir()删除目录
    fs.rmdir('config', err => {
      if (err) {
        console.log(err);
        if (err.code === 'ENOTEMPTY') {
          console.log('目录下存在文件无法删除');
        }
        return;
      }
      console.log('成功删除目录config');
    });
  });
});
// // 1.2、 fs.stat()：查看目录或者文件的属性信息
// fs.stat('public', (err, stats) => {
//   if (err) {
//     throw err;
//   }
//   console.log('成功读取目录public的信息', stats);
// });
// //2、文件内容读取：fs.readFile();文件内容写入: fs.writeFile();
// // 文件删除：fs.unlink():删除文件；fs.rename():重命名
// console.log('文件内容读取、写入=====================');
// //writeFile：创建或者重写文件；【wbepack.config.js不存在时创建，存在时重写】
fs.writeFile('config/webpack.config.js', 'const path = require("path");', err => {
  if (err) {
    return console.log(err);
  }
  console.log('fs.writeFile():写入成功');
  fs.readFile('config/webpack.config.js', 'utf-8', (err, data) => {
    if (err) {
      console.log('读取失败', err);
      return;
    }
    console.log('fs.readFile()读取成功', data);
  });
  //fs.appendFile(): 追加文件内容
  // 如果文件不存在，它会自动创建该文件
  fs.appendFile('config/webpack.config.js', '\nconst fs = require("fs");', err => {
    if (err) throw err;
    console.log('追加数据成功=========');
  });
  // copyFile: 复制文件；public/yxyy.txt将被创建或覆盖
  fs.copyFile('config/webpack.config.js', 'config/webpack.production.js', err => {
    if (err) throw err;
    console.log('复制成功');
    //读取文件属性【如：文件大小】
    fs.stat('config/webpack.production.js', (err, stas) => {
      if (err) throw err;
      console.log('文件属性：', stas);
      console.log('文件大小:', stas.size);
    });
  });
});
fs.writeFile('config/config.js', "const fs = require('fs');", err => {
  if (err) {
    throw err;
  }
  console.info('==========成功创建config.js文件');
  //fs.rename():重命名
  fs.rename('config/config.js', 'config/webpack.base.js', err => {
    if (err) throw err;
    console.log('文件重命名成功');
  });
});

// //创建文件[目录已存在才能成功创建]
if (fs.existsSync('config')) {
  console.log('目录config存在：');
  console.log('writeFile means to  create file or replace file content');
  fs.writeFile('config/style.css', 'html,body{margin:0;padding:0}', err => {
    if (err) {
      return console.log(err);
    }
    // fs.unlink()：删除文件[异步]，unlinkSync：同步
    console.log('fs.unlink():delete file');
    fs.unlink(path.join('config/style.css'), err => {
      if (err) throw err;
      console.log('Successfully deleted config/style.css');
    });
  });
} else {
  console.log('Config Dictionary  dose not exist,you can not create file ');
}

// // FSWatcher类
// const watcher = fs.watch('public/style.css', { encoding: 'utf-8' }, (eventType, filename) => {
//   if (filename) {
//     console.log(filename);
//     console.log('监听到该文件的更改');
//     console.log('停止监听更改');
//     watcher.close();
//   }
// });

// // 文件流
// let rs = fs.createReadStream('public/style.css', {
//   flags: 'r',
//   highWaterMark: 2, //文件一次读取的字节数：默认64*1024【64kb】
//   autoClose: true,
//   start: 0,
//   end: 10,
//   encoding: 'utf-8'
// });

// rs.on('open', () => {
//   console.log('文件打开');
// });
// rs.on('end', () => {
//   console.log('先执行end文件读取结束');
// });
// rs.on('close', () => {
//   console.log('后执行close文件关闭');
// });
// rs.on('data', data => {
//   console.log('正在写入：', data);
//   // 暂停读取
//   // rs.pause();
// });
// // setTimeout(()=>{
// //   rs.resume();//恢复继续读取
// // },1000)
