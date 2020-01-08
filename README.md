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
此网站可以用图标直观反映npm包的下载量
## promise problem
https://github.com/result17/blog/blob/master/others/promiseProblem.md
## 总结
对于没有验证，没有鉴权的网站，写node爬虫是比较简单。这次为了联系刚学会的ts，所以爬虫也用了ts写，但对于此种“一次性”代码，是没有必要的。
项目的难点也变成ts的合理使用，有点画蛇添足。不过ts对于项目而言是非常有必要的（ts是有难度的，但也是强大的），搭配合理有意义的命名甚至可以做到不用写注释。
而选用axios，单纯是因为对它稍有运用和基于promise的特点，对于node端选用体积更小的request库是更好的选择。
## to do
- 命令行的分辨率选择提示
- 进度条