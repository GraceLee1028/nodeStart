/**
 * fs 文件读写权限
 */
const fs = require('fs');
const file = './config/config.base.js';
//check if file exists
fs.access(file, fs.constants.F_OK, err => {
  if (err) {
    console.log(err);
    console.log('the file does not exist');
    return;
  }
  console.log('the file exists');
});
//check if file is readable
fs.access(file, fs.constants.R_OK, err => {
  if (err) {
    console.log(err);
    console.log(`File "${file}" is not readable`);
    return;
  }
  console.log('file is readable');
  fs.readFile(file, 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      console.log('readFile is fail');
    }
    console.log(`File ${file} result is :\n` + result);
  });
});

//check if file is writable
fs.access(file, fs.constants.W_OK, err => {
  if (err) {
    console.log(err);
    console.log(`File "${file}" is not writable`);
    return;
  }
  console.log('file is writable');
});

//check if file is writable or readable
fs.access(file, fs.constants.R_OK || fs.constants.W_OK, err => {
  if (err) {
    console.log(err);
    console.log(`File "${file}" is not writable or readable`);
    return;
  }
  console.log('file is writable or readable');
});
