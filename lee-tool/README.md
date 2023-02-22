# 日期的处理
```const {dateFormat} = require('lee-tool');
const now = new Date();
const dateOne = dateFormat(now,'yyyy-mm-dd h:m:s');
const dateTwo = dateFormat(now,'yyyy年mm月dd日 h时m分s秒');
console.log(dateOne)
console.log(dateTwo)
```

