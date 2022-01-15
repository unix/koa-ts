## koa-ts

使用 TypeScript 构建 Koa2 项目的最佳实践.

<br>

### 快速开始

1. 在终端输入: `npm init koa-ts` 初始化项目模板

2. 安装依赖: `yarn`

3. 重命名 `.env.example` 为 `.env`，随后运行 `prisma db push` 迁移数据库模型

4. 运行服务：`yarn dev`，访问 http://127.0.0.1:3000/apis/sessions

&nbsp;&nbsp;**(可选)** 项目为开发环境内置 compose，运行 `yarn dev:db` 启动 (如果您已有 docker)

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
│   ├── constants        ---  环境配置
│   ├── koa.middlewares     ---  Koa 中间件配置
│   ├── routing.middlewares ---  Routing Controller 中间件配置
│   ├── routing.options     ---  Routing Controller 参数配置
│   ├── bootstrap           ---  启动声明周期
│   ├── interceptors        ---  全局的拦截器
│   └── utils               ---  纯函数的帮助方法
└── test                    ---  测试工具函数
├── variables.env           ---  环境变量文件，如果在此文件设置将会覆盖 'config/environments'
```

<br>

### 特性

- 业务逻辑与配置分离，一目了然

- scheme model 等同于 interface，更符合 TS 的代码风格

- 依赖注入在 Koa 项目中的最佳实践

- 测试与 Lint 脚手架

- 得益于 Prisma 的自动数据模型约束

- TypeScript hot-load, 开发便捷

<br>

### 生命周期参考

1. 调用 `app.ts` -> 准备环境变量 `constants` -> 获取环境文件 `variables.env`

2. 准备完毕，调用 `bootstrap.before()`

3. 挂载 `routing-controllers` -> 挂载 Koa 中间件 -> 注册 `Container`

4. 启动 `Koa`。完毕调用 `bootstrap.after()`

<br>

### 数据库链接

项目默认使用 Prisma 作为智能化 ORM 工具，支持 `PostgreSQL` / `MySQL` / `SQLite`。

- 你可以在文件 `.env` 中修改数据库的链接配置。
- 每次编辑文件 `/prisma/schema.prisma` 修改模型后，建议运行 `prisma migrate dev` 来迁移数据库。
- 每次编辑文件 `/prisma/schema.prisma` 修改模型后，建议运行 `prisma generate` 生成类型文件。

<br>

### 关于环境变量

在 NodeJS 运行中，`ENV` 并不等于 `NODE_ENV`：

- 当 NodeJS 项目被 build 后 (如在服务端运行)，总是设置 `NODE_ENV=PRODUCTION`，这会影响一些第三方库的优化。
- `NODE_ENV` 只用于鉴别 NodeJS 运行，与你的业务环境无关。
- 推荐你总是使用 `ENV` 来鉴别当前的环境。

对于每个环境的数据设置，可以参考如下：

- **在开发环境中** (`ENV=development`)：自动从文件 `configs/constants/development.ts` 读取配置。

- **在生产环境中** (`ENV=production`): 自动从文件 `configs/constants/production.ts` 读取配置。

- **任何环境**: 如果 `.env` 文件内存在同名常量，会覆盖上述 2 个环境配置文件。优先级最高。

<br>

### 文档参考

- [routing-controllers](https://github.com/typestack/routing-controllers)
- [Prisma](https://www.prisma.io/docs/concepts)

<br>

### LICENSE

[MIT](./LICENSE)
