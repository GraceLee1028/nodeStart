//events事件
const EventEmitter = require("events");
const emitterOne = new EventEmitter();
// on: 用于注册监听器
console.log("=============================on")
emitterOne.on("event",function(a,b){
  console.log('触发了一个事件')
  console.log(a,b,this)
})
//emit: 触发事件
emitterOne.emit("event","name","age");

// once: 对于特定事件，最多被调用一次的监听器
console.log("=============================once")
emitterOne.once("login",function(){
  console.log('123')
})
emitterOne.emit("login")//打印:1
emitterOne.emit("login")//忽略

//注册error事件
console.log("=============================on")
emitterOne.on("error",function(err){
  console.log("报错")
})
emitterOne.emit("error",new Error("hello world"))
//注册data事件
emitterOne.on("data",function(data){
  console.log(data)
})
// emitterOne.emit("data",Buffer.from("hello"))
// newListener:会在一个监听器添加之前触发该事件
console.log("=============================newListener")
emitterOne.once("newListener",function(event,listener){
  if(event==='data'){
    console.log('测试 data')
  }
})

//列出已经注册监听器的数组
console.log("=============================eventNames()")
const eventNames = emitterOne.eventNames();
console.log("输出监听器的事件的数组：",eventNames);

//getMaxListeners()：返回最大监听器限制值
function getMax(em){
  console.log("=============================getMaxListeners()")
  return em.getMaxListeners();
}
const maxListenerNumber = getMax(emitterOne)
console.log("最大监听器限制值：",maxListenerNumber)
//listenerCount(eventName)：监听事件为eventName的事件的监听器数量
function getCurrentCount(em,eventName){
  console.log("=============================listenerCount(eventName)")
  return em.listenerCount(eventName)//事件：event
}
const currentCount = getCurrentCount(emitterOne,'event');
console.log("当前监听器数量",currentCount)

//prependListener:添加监听到监听器数组的开头
console.log("prependListener(eventName,listener)===============================")
emitterOne.on("connection",function(){
  console.log("连接上了")
})
emitterOne.emit("connection")

emitterOne.prependListener("connection",function(){
  console.log("添加到connection事件监听器数组的开头")
})
emitterOne.emit("connection")
const connectionListenerCount = getCurrentCount(emitterOne,'connection')
console.log("connection的监听器数：",connectionListenerCount)

//removeAllListeners(eventName):指定eventName:移除eventName;不指定eventName:移除全部的监听器
console.log('移除指定事件connection的监听器：=======================')
emitterOne.removeAllListeners("connection")
emitterOne.emit("connection")
console.log("connection的监听器数：",getCurrentCount(emitterOne,'connection'))

//setMaxListeners:修改指定EventEmitter的示例的监听器的限制
console.log("setMaxListeners(): 处理setMaxListeners")
emitterOne.setMaxListeners(20);
console.log("事件最大的监听器的数量：",emitterOne.getMaxListeners())

