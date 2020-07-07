/**
 *  Created by pw on 2020-07-08 01:01.
 */
const fs = require('fs')
const child_process = require('child_process')

export function createFileDir(dir: string) {
  fs.mkdir(dir, (err: NodeJS.ErrnoException) => {
    if (err) {
      console.log(err)
      return false
    }
  })
}

export function copyDir(source: string, target: string) {
  child_process.spawn('cp', ['-r', source, target])
}

export function copyFile(source: string, target: string) {
  fs.writeFileSync(target, fs.readFileSync(source))
}

export function writeFile(fileName: string, data: string | BufferSource) {
  fs.writeFile(fileName, data, (err: NodeJS.ErrnoException) => {
    if (err) {
      console.log(err)
    }
  })
}
