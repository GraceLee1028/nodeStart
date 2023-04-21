// 1、字符串和buffer的转换
const str = 'hello'
//将字符串保存在buffer中,转为二进制来保存
const buffer = Buffer.from(str);
console.log(str.length)
console.log(buffer.length)
//将二进制转为utf-8的字符串
console.log(buffer.toString('utf-8'))


//2、buffer的创建
//长度为10的buffer
const bufferOne = Buffer.alloc(10)
// 写入数据到buffer
const bufferOneLength = bufferOne.write('hello alloc')
console.log(bufferOne)
console.log('长度',bufferOneLength)

//3、buffer的转换toJson
const bufferTwo = Buffer.from(JSON.stringify({name:123}),'utf8')
console.log(bufferTwo)
const bufferTwoSTR = JSON.stringify(bufferTwo);
console.log(bufferTwoSTR,typeof bufferTwoSTR)
const bufferTwoStr = bufferTwo.toString('utf8')
console.log(bufferTwoStr,typeof bufferTwoStr)
const bufferTwoJSON = JSON.parse(bufferTwoStr);
console.log(bufferTwoJSON,typeof bufferTwoJSON)
const bufferTwoJson = bufferTwo.toJSON();
console.log(bufferTwoJson)


//4、缓冲合并 concat
const bufferThree = Buffer.from('hello concat');
const bufferFour = Buffer.concat([bufferOne,bufferThree])
console.log(bufferThree,bufferFour)
console.log('bufferFour====',bufferFour.toString('utf8'))

//5、缓冲区比较 compare
const bufferFive = Buffer.from('hello');
const bufferFiveTwo = Buffer.from('t');
const result = bufferFiveTwo.compare(bufferFive);
console.log(result)//0:bufferFiveTwo在bufferFive之前;//完全没有匹配上则在之后

//6、缓冲区拷贝插入 copy
const bufferCopy1 = Buffer.from('hello');
const bufferCopy2 = Buffer.from('world');
bufferCopy2.copy(bufferCopy1,4)//将bufferCopy2拷贝插入到bufferCopy1指定位置
console.log(bufferCopy1.toString())