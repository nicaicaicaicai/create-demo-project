"use strict";
exports.__esModule = true;
exports.writeFile = exports.copyFile = exports.copyDir = exports.createFileDir = void 0;
/**
 *  Created by pw on 2020-07-08 01:01.
 */
var fs = require('fs');
var child_process = require('child_process');
function createFileDir(dir) {
    fs.mkdir(dir, function (err) {
        if (err) {
            console.log(err);
            return false;
        }
    });
}
exports.createFileDir = createFileDir;
function copyDir(source, target) {
    child_process.spawn('cp', ['-r', source, target]);
}
exports.copyDir = copyDir;
function copyFile(source, target) {
    fs.writeFileSync(target, fs.readFileSync(source));
}
exports.copyFile = copyFile;
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        }
    });
}
exports.writeFile = writeFile;
