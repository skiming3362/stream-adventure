/*
* @Author: skiming
* @Date:   2017-07-29 20:48:29
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-29 21:12:08
*/

const through = require('through2')
const split = require('split')

let lineCount = 0
process.stdin.pipe(split()).pipe(through(function (buffer, _, next) {
    let line = buffer.toString()
    this.push(lineCount % 2 === 0
        ? `${line.toLowerCase()}\n`
        : `${line.toUpperCase()}\n`
        )
    lineCount++
    next()
})).pipe(process.stdout)