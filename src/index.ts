#!/usr/bin/env node
import { Buffer } from 'buffer'

/**
 *  Created by pw on 2020-07-08 00:32.
 */
const pacakgeJson = require('../package.json')
import { createFileDir, copyDir, copyFile, writeFile } from './fileUtil'
const argv = require('yargs').alias('n', 'name').version('v', pacakgeJson.version).argv

const projectName = argv.name

if (projectName) {
  // 1、创建一个项目目录
  createFileDir(projectName)

  // 2、拷贝模板文件
  copyDir('./templates/', `${projectName}/`)
  // const copyFiles = ['.babelrc', '.gitignore', '.prettierrc', 'index.hbs', 'tsconfig.json', 'webpack.config.js']
  //
  // copyFiles.forEach((file) => {
  //   copyFile(`./${file}`, `${projectName}/${file}`)
  // })

  pacakgeJson.name = projectName
  const data = Buffer.from(JSON.stringify(pacakgeJson))

  writeFile(`${projectName}/package.json`, data)

  console.log(`创建${projectName}成功`)
}
