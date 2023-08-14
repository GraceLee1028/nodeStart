const fs = require("fs")

const file = fs.createWriteStream("./readfs.md")
file.write("当前为文件流的学习文件生成")
file.end();

