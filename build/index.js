const fs = require('fs');
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

const pathFile = path.join(__dirname,'../public/index.html');
console.log(pathFile)
fs.readFile(pathFile,'utf-8',function(err,data){
  if(err){
    console.log('读取文件失败');
    return;
  }
  console.log('成功读取到文件');
  resolveCss(data)
  resolveJs(data)
  resolveHtml(data)
})
function resolveCss(data){
  let style = regStyle.exec(data);
  let css = style[0].replace('<style>','').replace('</style>','');
  fs.writeFile(path.join(__dirname,'style.css'),css,function(err){
    if(err){
      console.log('css写入失败')
      console.log(err);
      return;
    }
    console.log('css写入成功')
  })
}

function resolveJs(data){
  let script = regScript.exec(data);
  let js = script[0].replace('<script>','').replace('</script>','')
  
  fs.writeFile(path.join(__dirname,'main.js'),js,function(err){
    if(err){
      console.log('js写入失败')
      console.log(err);
      return;
    }
    console.log('js写入成功')
  })
}

function resolveHtml(data){
  let html = data.replace(regStyle,'<link rel="stylesheet" href="./style.css" />').replace(regScript,'<script href="./main.js" />')
  
  fs.writeFile(path.join(__dirname,'main.html'),html,function(err){
    if(err){
      console.log('html写入失败')
      console.log(err);
      return;
    }
    console.log('html写入成功')
  })
}

