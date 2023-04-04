const qs = require("querystring")
function BodyParser(req,res,next){
  let d = ""
  req.on("data",(chunk)=>{
    d+=chunk;
  });
  req.on("end",()=>{
    //完整的请求体
    // console.log(typeof d)
    req.body = qs.parse(d);
    // console.log(typeof  req.body)
    next();
  })
}
module.exports = BodyParser