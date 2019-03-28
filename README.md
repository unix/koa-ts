### koa2-typescript-guide
the best practice of building Koa2 with TypeScript. [中文](/README_CN.md)

<br>

#### Usage
**required [NodeJS > 8.0](https://nodejs.org/)**

1. Run `npx koa2-ts --name=hello`. ()

2. Install dependencies: `yarn` or `npm i`.

3. **[Optional]** if you need database, set *useMongoDB* to true.(in configs/customs.ts)

4. **[Optional]** the project has built-in a docker-compose, run `npm run mongo` lift mongodb automatic.
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
│   ├── middlewares         ---  middleware config of Koa
│   ├── connection          ---  database connection
│   ├── customs             ---  user settings
│   └── interceptors        ---  global interceptor
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

<br>

### Reference
- [routing-controller](https://github.com/typestack/routing-controllers)
- [typedi](https://github.com/typestack/typedi)
- [typeorm](https://github.com/typeorm/typeorm)

<br>

### LICENSE
Licensed under the [MIT LICENSE](https://github.com/zeit-ui/vue/blob/master/LICENSE).
