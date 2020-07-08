#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = require("buffer");
/**
 *  Created by pw on 2020-07-08 00:32.
 */
var pacakgeJson = require('../package.json');
var fileUtil_1 = require("./fileUtil");
var argv = require('yargs').alias('n', 'name').version('v', pacakgeJson.version).argv;
var projectName = argv.name;
if (projectName) {
    // 1、创建一个项目目录
    fileUtil_1.createFileDir(projectName);
    // 2、拷贝模板文件
    fileUtil_1.copyDir('./templates/', projectName + "/");
    // const copyFiles = ['.babelrc', '.gitignore', '.prettierrc', 'index.hbs', 'tsconfig.json', 'webpack.config.js']
    //
    // copyFiles.forEach((file) => {
    //   copyFile(`./${file}`, `${projectName}/${file}`)
    // })
    pacakgeJson.name = projectName;
    var data = buffer_1.Buffer.from(JSON.stringify(pacakgeJson));
    fileUtil_1.writeFile(projectName + "/package.json", data);
    console.log("\u521B\u5EFA" + projectName + "\u6210\u529F");
}
