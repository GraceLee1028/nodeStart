/**
 * @func : 全局变量
 */
const os = require('os')
// console.log(global)
// 模块


//操作系统的主机名
const hn = os.hostname();
console.log('主机名：',hn)

// 返回一个网络对象（如：ip4、mac地址）
const network = os.networkInterfaces();
console.log(network);//

// platform()：操作系统平台
const pf = os.platform();
console.log(pf);//win32或win64

// tmpdir():返回临时文件目录
const dir = os.tmpdir();
console.log(dir)

//获取ip地址
function getLocalIp(){
  const network = os.networkInterfaces();
  for(let devName in network){
    let id = network[devName];
    for(let i=0;i<id.length;i++){
      let alias = id[i];

      if(alias.family==='IPv4'&&alias.address!=='127.0.0.1'&&!alias.internal){
        return alias.address;
      }
    }
  }
}
const localIp = getLocalIp();
console.log(localIp)