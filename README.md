# Basic Node and Express

This is the boilerplate code for the Basic Node and Express Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/

# 启动时监听变化的依赖
```
npm i nodemon -g
```

# 启动一个服务
```
node index.js
```

### 备注：当创建了新的文件、添加了新的中间件时注意重新启动服务

# 解决前端跨域问题
```
# 安装
npm install cors
# 使用
## 引用
const cors = require("cors");
//引入该全局中间件
app.use(cors())
```

# cors的相关配置
```
cors({
  //  origin: '*',
    origin: ['https://www.section.io', 'https://www.google.com/'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
})
```