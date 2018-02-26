## koa2-typescript-guide
the best practice of building Koa2 with TypeScript. [中文](/README_CN.md)


### usage

1. clone repo. `git clone git@github.com:DhyanaChina/koa2-typescript-guide.git`
2. install dependencies. `npm i`
3. configuring database information.

### catalog

```
├── app
│   ├── controllers         ---  contoller
│   ├── helpers             ---  helper func
│   ├── jobs                ---  periodic task
│   ├── models              ---  database model
│   └── services            ---  adhesive controller and model
├── config
│   ├── environments        ---  environment variable
│   └── routers             ---  routing configuration file
└── test
    └── apis                ---  test cases
```

### feature

- separation configuration and business logic.

- export scheme model and interface, keep the TypeScript style.

- the minimalist rustful grammar, reduce the weight of the contoller.

- test cases and more scientific lint configuration.

