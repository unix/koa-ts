## koa-ts

使用 TypeScript 构建 Koa2 项目的最佳实践.

<br>

### 快速开始

**项目依赖: [NodeJS > 12.0](https://nodejs.org/cn)**

1. 在终端输入: `npm init koa-ts` 即可快速初始化。

2. 安装依赖: `yarn` 或 `npm i`。

3. 挂起服务：`yarn dev` 或 `npm dev`，访问 http://127.0.0.1:3000/apis/sessions 示例。

&nbsp;&nbsp;**(可选)** 如果你需要数据库，请设置 `useDatabase=true` (在 `configs/customs.ts` 文件中)。

&nbsp;&nbsp;**(可选)** 项目内置了 docker-compose 数据库，可以使用 `npm run mongo` 自动挂起 mongo (如果您已有 docker / docker-compose)。

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
│   ├── environments        ---  环境配置
│   ├── koa.middlewares     ---  Koa 中间件配置
│   ├── routing.middlewares ---  Routing Controller 中间件配置
│   ├── routing.options     ---  Routing Controller 参数配置
│   ├── connection          ---  数据库连接
│   ├── bootstrap           ---  启动声明周期
│   ├── customs             ---  用户的全局配置
│   ├── interceptors        ---  全局的拦截器
│   └── utils               ---  纯函数的帮助方法
└── test                    ---  测试工具函数
├── variables.env           ---  环境变量文件，如果在此文件设置将会覆盖 'config/environments'
```

<br>

### 特性

- 业务逻辑与配置分离，一目了然。

- scheme model 等同于 interface，更符合 TS 的代码风格。

- 依赖注入在 Koa 项目中的最佳实践。

- 测试与 Lint 脚手架。

- 使用 ncc 单文件部署。

- TypeScript hotload, 开发便捷。

<br>

### 生命周期参考

1. 调用 `app.ts` -> 准备环境变量 `environments` -> 获取环境文件 `variables.env`

2. 准备完毕，调用 `bootstrap.before()`

3. 如果启用，`configs/connection.ts` 开始链接外部服务 (如 DB、Redis)

4. 挂载 `routing-controllers` -> 挂载 Koa 中间件 -> 注册 `Container`

5. 启动 `Koa`。完毕调用 `bootstrap.after()`

6. 如果启用，`configs/connection.ts` 链接完毕，调用 `bootstrap.connected()`

<br>

### 数据库链接

你可以连接多个不同类型的数据 (如 `mysql` / `mongo` 等等)，每种数据库的配置信息也能再分为多个环境：

1. 应用将加载 `ormconfig.js` 文件作为默认的数据库连接配置信息。
2. 你还可以在文件夹 `configs/environments` 下指定不同环境的链接信息。
3. 你还可以在文件 `variables.env` 中指定 **私密或加密** 的链接信息，它们一般用于生产环境。也建议不要将 `variables.env` 文件加入版本控制。
4. 此外，你还是可以手动设置 `process.env` 覆盖以上所有。

<br>

### 关于环境变量

- **在开发环境中** (`NODE_ENV=development`)：自动从文件 `configs/environments/development.ts` 读取配置。

- **在生产环境中** (`NODE_ENV=production`): 自动从文件 `configs/environments/production.ts` 读取配置。

- **任何环境**: 如果 `variables.env` 文件内存在同名常量，会覆盖上述 2 个环境配置文件。优先级最高。

<br>

### 文档参考

- [how to validate params](https://github.com/typestack/class-validator)
- [routing-controller](https://github.com/typestack/routing-controllers)
- [typedi](https://github.com/typestack/typedi)
- [typeorm](https://github.com/typeorm/typeorm)

<br>

### LICENSE

[MIT](./LICENSE)
