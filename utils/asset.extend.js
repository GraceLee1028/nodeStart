//assert：断言，用于测试测试
const assert =  require("assert");

//1. assert.ok()或者简写assert():判断是否为真值，测试是否通过
const flag = true;
console.log("测试flag是否为真值")
assert.ok(flag)
console.log("测试通过")
// const errorFlag = false;
// console.log("测试errorFlag是否为真值")
// assert.ok(errorFlag,"测试未通过，不是真值")
//errorFlag的值报错，非真值，后续代码不会执行
// console.log('errorFlag不是真值，此行及之后代码不会执行')

//assert.ok()的简写用法：assert()
const name="lee"
assert(name);
console.log("assert(name)测试通过，是真值，继续执行")

// 2、 assert.ifError(value)：if it is not null or undefined,则抛出异常
function testError(value){
  assert.ifError(value)//值为undefined:不会抛出异常
  return true
}
testError()


