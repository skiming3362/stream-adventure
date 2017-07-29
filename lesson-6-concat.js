/*
* @Author: skiming
* @Date:   2017-07-29 21:17:33
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-29 21:24:44
*/

const concat = require('concat-stream')

process.stdin.pipe(concat(function (data) {
    let s = data.toString().split('').reverse().join('')
    console.log(s)
}))