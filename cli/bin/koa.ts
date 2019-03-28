const fs = require('fs')
const path = require('path')
const execa = require('execa')
const ora = require('ora')
const download = require('download-git-repo')
const args = process.argv.slice(2)
const exit = (text: string): void => {
  ora(text).start().fail()
  process.exit(1)
}

// check args
if (!args || !args.length) exit('you need to specify the project name.\nE.g. --name=myproject')
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
  const spinner = ora('fetch version...').start()
  let pkg = '{}'
  try {
    const response = await require('node-fetch')('https://cdn.jsdelivr.net/gh/wittbulter/koa2-typescript-guide/package.json')
    pkg = await response.text()
    spinner.stop()
    spinner.clear()
  } catch (err) {
    spinner.fail(err)
  }
  const { version } = JSON.parse(pkg)
  const url = `direct:https://github.com/WittBulter/koa2-typescript-guide/archive/${version}.zip`
  const downloadSpinner = ora(`latest version: v${version}, install...`).start()
  download(url, to, { clone: false }, (err: any) => {
    if (err) {
      downloadSpinner.stop()
      downloadSpinner.clear()
      return exit(`${err}. abort.`)
    }
    installAfter(projectName, to)
    downloadSpinner.succeed('installed successfully.')
  })
}

install().then().catch(e => console.log(e))
