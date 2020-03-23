### koa-ts

The best practice of building Koa2 with TypeScript. [中文](/README_CN.md)

---

#### Usage

> **This layout requires NodeJS v10+**

1. Run `npm init koa-ts`.

2. Install dependencies: `yarn` or `npm i`.

3. Start the server: `yarn start` or `npm start`. visit: http://127.0.0.1:3000/apis/sessions

> **[Optional]** if you need database, set *useMongoDB* to true.(in `configs/customs.ts`).

> **[Optional]** the project has built-in a docker-compose, run `npm run mongo` lift mongodb automatic.

---

#### Project Layout

```
├── app
│   ├── controllers         ---  server controllers
│   ├── helpers             ---  helper func (interceptor / error handler / validator...)
│   ├── jobs                ---  task (periodic task / trigger task / email server...)
│   ├── entities            ---  database entities/models
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

---

#### Feature

- Separation configuration and business logic.

- Export scheme model and interface, follow style of TypeScript.

- Test cases and lint configuration.

- The best practice for Dependency Injection in Koa project.

- Deploy by ncc.

- TypeScript hotload.

---

#### Lifecycle

  1. `app.ts` -> collect env vars `environments` -> collect env files `variables.env`
    
  2. envs ready, call `bootstrap.before()`
  
  3. `configs/connection.ts` connecting external services (e.g. DB / Redis...)
  
  4. lift `routing-controllers` -> lift Koa middlewares -> register `Container` for DI
  
  5. start Koa &amp; invoke `bootstrap.after()` after startup
  
  6. `configs/connection.ts` connected -> invoke `bootstrap.connected()`

---

#### About Environments

  - **Development Mode** (`NODE_ENV=development`): read configurations from `configs/environments/development.ts` file, but it will still be overwritten by `variables.env` file.
  
  - **Production Mode** (`NODE_ENV=production`): read configurations from `configs/environments/production.ts` file, but it will still be overwritten by `variables.env` file.

---

#### Reference

- [Parameter Validation](https://github.com/typestack/class-validator)
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [typedi](https://github.com/typestack/typedi)
- [typeorm](https://github.com/typeorm/typeorm)

---

#### LICENSE

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more info.

