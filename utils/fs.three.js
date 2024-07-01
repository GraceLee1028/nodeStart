/**
 * html的拆分
 *
 */
const fs = require('fs');
const path = require('path');
/**
 * css处理
 * @param {css字符串} str
 */

function dealHtml(filepath) {
  fs.readFile(filepath, 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const regscript = /<script>[\s\S]*<\/script>/;
    const regStyle = /<style>[\s\S]*<\/style>/;
    resolveContent(result, regStyle, 'style');
    resolveContent(result, regscript, 'script');
    resolveHtml(result, regStyle, regscript);
  });
}
function resolveContent(str, reg, style) {
  const rt = reg.exec(str);
  console.log(rt, '=[[[[[[[[[===============rt', style);
  const result = rt && rt[0] ? rt[0].replace(`<${style}>`, '').replace(`</${style}>`, '') : '';
  console.log(result, '======exec result');
  fs.writeFile(`dist/${style}.${style === 'style' ? 'css' : 'js'}`, result, err => {
    if (err) {
      console.log(`write ${style} fail!`);
      console.log(err);
      return;
    }
    console.log(`write ${style} success!`);
  });

  return result;
}
function resolveHtml(str, regStyle, regScript) {
  str = str.replace(regStyle, "<link rel='stylesheet' href='./style.css' />");
  str = str.replace(regScript, "<script type='text/javascript' src='./script.js' />");

  fs.writeFile(`dist/index.html`, str, err => {
    if (err) {
      console.log(`write html fail!`);
      console.log(err);
      return;
    }
    console.log(`write html success!`);
  });
}
dealHtml(path.join(__dirname, '../', 'public/index.html'));
