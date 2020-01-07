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
