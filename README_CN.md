## koa2-typescript-guide
使用 TypeScript 构建 Koa2 项目的最佳实践.


### 使用

1. clone 项目. `git clone git@github.com:DhyanaChina/koa2-typescript-guide.git`
2. 安装依赖. `npm i`
3. 配置你的数据库信息，在 `config/connection.ts` 中。（不使用数据库请移除相关代码）

### 目录

```
├── app
│   ├── controllers         ---  控制器
│   ├── helpers             ---  帮助工具集
│   ├── jobs                ---  定时任务
│   ├── models              ---  数据库 model
│   └── services            ---  controller 与 model 的粘合层 (提拱一些实用方法，屏蔽底层操作...)
├── config
│   ├── environments        ---  环境变量
│   └── routers             ---  路由配置文件
└── test
    └── apis                ---  测试用例
```

### feature

- 业务逻辑与配置分离，一目了然。

- 同时导出 scheme model 与 interface，更符合 TS 的代码风格。

- 非常小巧的 RUSTful 语法糖, 有助于减轻控制器重量。

- 测试相关与更严谨的 Lint。

