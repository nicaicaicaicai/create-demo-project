#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Created by pw on 2020-07-08 00:32.
 */
var buffer_1 = require("buffer");
var pacakgeJson = require('../package.json');
var path = require('path');
var fileUtil_1 = require("./fileUtil");
var argv = require('yargs').alias('n', 'name').version('v', pacakgeJson.version).argv;
var projectName = argv.name;
if (projectName) {
    // 1、创建一个项目目录
    fileUtil_1.createFileDir(projectName);
    // 2、拷贝模板文件
    var path_path_1 = path.resolve(process.cwd(), projectName);
    var templateDir_1 = path.resolve(__dirname, '../templates');
    fileUtil_1.copyDir(templateDir_1 + "/src", path_path_1);
    var copyFiles = ['.babelrc', '.prettierrc', 'index.hbs', 'tsconfig.json', 'webpack.config.js'];
    copyFiles.forEach(function (file) {
        var sourcePath = templateDir_1 + "/" + file;
        var targetPath = path_path_1 + "/" + file;
        fileUtil_1.copyFile(sourcePath, targetPath);
    });
    var projectPacagejosn = require(templateDir_1 + "/package.json");
    projectPacagejosn.name = projectName;
    var data = buffer_1.Buffer.from(JSON.stringify(projectPacagejosn));
    fileUtil_1.writeFile(path_path_1 + "/package.json", data);
    console.log("\u521B\u5EFA" + projectName + "\u6210\u529F");
}
