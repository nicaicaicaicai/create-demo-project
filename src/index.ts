#!/usr/bin/env node

/**
 *  Created by pw on 2020-07-08 00:32.
 */
import { Buffer } from 'buffer'
const pacakgeJson = require('../package.json')

const path = require('path')
import { createFileDir, copyDir, writeFile,copyFile } from './fileUtil'
const argv = require('yargs').alias('n', 'name').version('v', pacakgeJson.version).argv

const projectName = argv.name

if (projectName) {
  // 1、创建一个项目目录
  createFileDir(projectName)

  // 2、拷贝模板文件

  const path_path = path.resolve(process.cwd(), projectName)
  const templateDir = path.resolve(__dirname, '../templates');
  copyDir(`${templateDir}/src`, path_path)

  const copyFiles = ['.babelrc', '.prettierrc', 'index.hbs', 'tsconfig.json', 'webpack.config.js']
  copyFiles.forEach((file) => {
    const sourcePath = `${templateDir}/${file}`
    const targetPath = `${path_path}/${file}`
    copyFile(sourcePath, targetPath)
  })

  const projectPacagejosn = require(`${templateDir}/package.json`)
  projectPacagejosn.name = projectName
  const data = Buffer.from(JSON.stringify(projectPacagejosn))

  writeFile(`${path_path}/package.json`, data)

  console.log(`创建${projectName}成功`)
}
