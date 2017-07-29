/*
* @Author: skiming
* @Date:   2017-07-29 19:43:15
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-29 19:57:22
*/

const through = require('through2')

const tranStream = through(function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase())
    next()
}, (done) => {
    done()
})
process.stdin.pipe(tranStream).pipe(process.stdout)