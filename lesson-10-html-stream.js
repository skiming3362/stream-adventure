/*
* @Author: skiming
* @Date:   2017-08-14 22:01:31
* @Last Modified by:   skiming
* @Last Modified time: 2017-08-14 22:14:17
*/

const fs = require('fs')
const trumpet = require('trumpet')
const through = require('through2')

const tr = trumpet()
const loud = tr.select('.loud').createStream()

loud.pipe(through(function(buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)