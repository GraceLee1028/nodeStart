// 1、字符串和buffer的转换
const str = 'hello'
//将字符串保存在buffer中,转为二进制来保存
const buffer = Buffer.from(str);
console.log(str.length)
console.log(buffer.length)
//将二进制转为utf-8的字符串
console.log(buffer.toString('utf-8'))
console.log(buffer)
console.log('=========================================================')
//2、buffer的创建
//长度为10的buffer，默认用0填充
const bufferOne = Buffer.alloc(20)
// 写入数据到buffer
const bufferOneLength = bufferOne.write('hello alloc ，你好')
console.log(bufferOne)
console.log('长度',bufferOneLength)
console.log('toString()：真实数据',bufferOne.toString())
console.log('=========================================================')

//3、buffer中对象的转换
const bufferTwo = Buffer.from(JSON.stringify({name:"测试"}))//,'utf8'
const bufferTwoStr = bufferTwo.toString('utf8')
console.log("Buffer.from(): ",bufferTwo)
console.log(".toString(): ",bufferTwoStr,typeof bufferTwoStr)
const bufferTwoJSON = JSON.parse(bufferTwoStr);
console.log("JSON.parse(): ",bufferTwoJSON,typeof bufferTwoJSON)
const bufferThressJson = bufferTwo.toJSON();
console.log("toJson():  ",bufferThressJson)
console.log('=========================================================')

//4、缓冲合并 concat
const bufferThree = Buffer.from('hello concat');
const bufferFour = Buffer.concat([bufferOne,bufferThree])
console.log(bufferThree,bufferFour)
console.log('concat+toString(): ',bufferFour.toString('utf8'))

//5、缓冲区比较 compare
const bufferFive = Buffer.from('hello');
const bufferFiveTwo = Buffer.from('t');
const result = bufferFiveTwo.compare(bufferFive);
console.log(result)//0:bufferFiveTwo在bufferFive之前;//完全没有匹配上则在之后

//6、缓冲区拷贝插入 copy
const bufferCopy1 = Buffer.from('hello');
const bufferCopy2 = Buffer.from('world');
const copyBuffer = Buffer.alloc(bufferCopy1.length+bufferCopy2.length)
//copy(拷贝进的buffer,拷贝进的偏移量,拷贝的开始位置，拷贝的结束位置)
bufferCopy1.copy(copyBuffer,0,0,1)//将bufferCopy1的h拷贝插入到copyBuffer指定位置0
bufferCopy1.copy(copyBuffer,1,1,2)//将bufferCopy1的e拷贝插入到copyBuffer指定位置1
console.log("copy()==========",copyBuffer.toString())//结果为he