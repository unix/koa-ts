### koa-ts
The best practice of building Koa2 with TypeScript. [中文](/README_CN.md)

<br>

#### Usage
**required [NodeJS > 8.0](https://nodejs.org/)**

1. Run `npm init koa-ts`.

2. Install dependencies: `yarn` or `npm i`.

3. Lift srever: `yarn start` or `npm start`. visit: http://127.0.0.1:3000/apis/sessions

&nbsp;&nbsp;**[Optional]** if you need database, set *useMongoDB* to true.(in `configs/customs.ts`).

&nbsp;&nbsp;**[Optional]** the project has built-in a docker-compose, run `npm run mongo` lift mongodb automatic.
<br>

### Catalog

```
├── app
│   ├── controllers         ---  contoller
│   ├── helpers             ---  helper func (interceptor / error handler / validator...)
│   ├── jobs                ---  task (periodic task / trigger task / email server...)
│   ├── entities            ---  database entity (model)
│   └── services            ---  adhesive controller and model
├── config
│   ├── environments        ---  environment variable
│   ├── koa.middlewares     ---  middlewares for Koa
│   ├── routing.middlewares ---  middlewares for Routing Controller
│   ├── routing.options     ---  configs for Routing Controller
│   ├── connection          ---  database connection
│   ├── bootstrap           ---  lifecycle
│   ├── customs             ---  user settings
│   └── interceptors        ---  global interceptor
│   └── utils               ---  pure functions for help
└── test
    └── apis                ---  test cases
├── variables.env           ---  environment file
```

<br>

### Feature

- Separation configuration and business logic.

- Export scheme model and interface, follow style of TypeScript.

- Test cases and lint configuration.

- The best practice for Dependency Injection in Koa project.

- Deploy by ncc.

- TypeScript hotload.

<br>

### Lifecycle

  1. `app.ts` -> collect env vars `environments` -> coolect env files `variables.env`
    
  2. envs ready, call `bootstrap.before()`
  
  3. `configs/connection.ts` connecting external services (e.g. DB / Redis...)
  
  4. lift `routing-controllers` -> lift Koa middlewares -> register `Container` for DI
  
  5. start `Koa`。invoke `bootstrap.after()` after startup
  
  6. `configs/connection.ts` connected -> invoke `bootstrap.connected()`

<br>

### About Environments

  - **In development** (`NODE_ENV=development`), read configurations from `configs/environments/development.ts` file, but it will still be overwritten by `variables.env` file.
  
  - **In production** (`NODE_ENV=production`), read configurations from `configs/environments/production.ts` file, but it will still be overwritten by `variables.env` file.

<br>

### Reference

- [how to validate params](https://github.com/typestack/class-validator)
- [routing-controller](https://github.com/typestack/routing-controllers)
- [typedi](https://github.com/typestack/typedi)
- [typeorm](https://github.com/typeorm/typeorm)

<br>

### LICENSE
Licensed under the [MIT LICENSE](./LICENSE).
