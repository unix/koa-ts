#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const execa = require('execa')
const download = require('download-git-repo')
const args = process.argv.slice(2)
const exit = (text: string): void => {
  console.log(text)
  process.exit(1)
}

// check args
if (!args || !args.length) exit('you need to specify the project name.')
const projectName = args[0].startsWith('--name=') ? args[0].split('--name=')[1] : null
if (!projectName) exit('param not valid. \ne.g.: --name=hello_world')
const to = path.join(process.cwd(), projectName)

// check project name
if (fs.existsSync(to)) exit(`${projectName} already exists, abort.`)


const installAfter = (project: string, dir: string): void => {
  execa.shellSync(`cd ${dir} && rm -rf .netlify .travis.yml .github now.json README_CN.md cli`)
  const packagePath = path.join(to, 'package.json')
  if (!fs.existsSync(packagePath)) return
  let pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
  pkg = Object.assign(pkg, {
    name: project,
    version: '0.0.1',
  })
  delete pkg.author
  delete pkg.bugs
  delete pkg.description
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, '\t'))
}

const install = async(): Promise<void> => {
  const response = await require('node-fetch')('https://raw.githubusercontent.com/WittBulter/koa2-typescript-guide/master/package.json')
  const pkg = await response.text()
  const { version } = JSON.parse(pkg)
  const url = `direct:https://github.com/WittBulter/koa2-typescript-guide/archive/v${version}.zip`
  console.log(`latest version: v${version}, install...`)
  download(url, to, { clone: false }, (err: any) => {
    if (err) return exit(`${err}. abort.`)
    installAfter(projectName, to)
    console.log('installed successfully.')
  })
}

install().then().catch(e => console.log(e))
