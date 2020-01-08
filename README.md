## 配置tsconfig.json
直接运行https://basarat.gitbook.io/typescript/nodejs
typescript deep dive中的用法
## 新建tsconfig.json后vscode报错
https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file
添加任一个ts文件，重启vscode
## esModuleInterop的问题
在tsconfig.json可以像CommonJS一样使用ES6 modules 。但当引入模块，没有default export。编译时就会报错。
https://github.com/microsoft/TypeScript/issues/3337
solution
```js
import * as express from express
// or
import moment = require('moment')
```
但如果你用上面的方法，当你
```js
express()
```
vscode会报错 namespace is not callable，所以推荐用第二种“难看”的方法。有时间请阅读ts的issue
https://github.com/microsoft/TypeScript/issues/2242
## axios结合typescript使用
较为琐碎，详细见getRes.ts，主要就是跟axios中的index.d.ts结合使用
https://github.com/axios/axios/blob/master/index.d.ts
https://github.com/axios/axios/issues/1510
http://www.axios-js.com/zh-cn/docs/#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86
## cheerio结合typescript使用
```js
// install
npm install -D @types/cheerio
```
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/cheerio/index.d.ts
## npmtrend网站
此网站可以用图标只管反应npm包的下载量