## koa2-typescript-guide
使用 TypeScript 构建 Koa2 项目的最佳实践.

<br>

### 使用
**项目依赖: [NodeJS > 8.0](https://nodejs.org/cn)**

1. 在终端输入: `npx koa2-ts --name=hello`。

2. 安装依赖: `npm i`。

3. **[可选]** 如果你需要数据库，请打开 `application.ts` 中的注释:
```ts
// in application.ts
import './connection'
```

4. **[可选]** 项目内置了 docker-compose 数据库，可以使用 `npm run mongo` 来尝试自动挂起。

<br>

### 目录

```
├── app
│   ├── controllers         ---  控制器
│   ├── helpers             ---  帮助工具集 (拦截器、错误集、验证等)
│   ├── jobs                ---  任务 (定时任务、触发任务、邮件任务等)
│   ├── entities            ---  数据实体，数据库模型文件
│   └── services            ---  controller 与 model 的粘合层 (提拱一些实用方法...)
├── config
│   ├── environments        ---  环境变量
│   ├── middlewares         ---  Koa 中间件配置
│   ├── connection          ---  数据库连接
│   └── interceptors        ---  全局的拦截器
└── test
    └── apis                ---  测试用例
```

<br>

### 特性

- 业务逻辑与配置分离，一目了然。

- scheme model 等同于 interface，更符合 TS 的代码风格。

- 依赖注入在 Koa 项目中的最佳实践。

- 测试与 Lint。


<br>

### 文档参考

- [routing-controller](https://github.com/typestack/routing-controllers)
- [typedi](https://github.com/typestack/typedi)
- [typeorm](https://github.com/typeorm/typeorm)

<br>

### LICENSE
[MIT](LICENSE)
