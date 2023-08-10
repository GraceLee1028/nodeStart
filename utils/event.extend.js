//events事件
const EventEmitter = require("events");
const emitterOne = new EventEmitter();
// on: 用于注册监听器
emitterOne.on("event",function(a,b){
  console.log('触发了一个事件')
  console.log(a,b,this)
})
//emit: 触发事件
emitterOne.emit("event","name","age");

// once: 对于特定事件，最多被调用一次的监听器
emitterOne.once("login",function(){
  console.log('123')
})
emitterOne.emit("login")//打印:1
emitterOne.emit("login")//忽略

//注册error事件
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
emitterOne.once("newListener",function(event,listener){
  if(event==='data'){
    console.log('测试 data')
  }
})

//列出已经注册监听器的数组
const eventNames = emitterOne.eventNames();
console.log("输出监听器的事件的数组：",eventNames);



