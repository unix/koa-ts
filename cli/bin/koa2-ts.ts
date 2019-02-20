#!/usr/bin/env node
const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')
const download = require('download-git-repo')
const args = process.argv.slice(2)
const exit = (text: string): void => {
  console.log(text)
  process.exit(1)
}

// check args
if (!args || !args.length) exit('you need to specify the project name.')
const to = path.join(process.cwd(), args[0])

// check project name
if (fs.existsSync(to)) exit(`${args[0]} already exists, abort.`)

const install = async(): Promise<void> => {
  const response = await fetch('https://raw.githubusercontent.com/just-fine/vue-coffee/master/package.json')
  const pkg = await response.text()
  const { version } = JSON.parse(pkg)
  const url = `https://github.com/DhyanaChina/koa-custom-response/archive/v${version}.zip`
  console.log('install...')
  download(url, to, { clone: false }, (err: any) => {
    if (err) return exit(`${err}. abort.`)
    console.log('installed successfully.')
  })
}

install().then().catch(e => console.log(e))
