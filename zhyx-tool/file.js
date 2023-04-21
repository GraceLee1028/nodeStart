/**
 * 通过blob流下载文件
 * @param {*} content blob
 * @param {*} name 下载文件名
 */
function download (content,name){
  const blob = new Blob([content]);
  const link = document.createElement('a');
  link.download = name;
  link.style.display = 'none';
  const src = URL.createObjectURL(blob,{type:'application/octet-stream'});
  link.href = src;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(src);
}
module.exports = {
  download
}