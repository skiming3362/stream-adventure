/*
* @Author: skiming
* @Date:   2017-08-14 22:15:10
* @Last Modified by:   skiming
* @Last Modified time: 2017-08-14 22:19:30
*/

const spawn = require('child_process').spawn
const duplexer = require('duplexer2')

module.exports = (cmd, args) => {
    const ps = spawn(cmd, args)
    return duplexer(ps.stdin, ps.stdout)
}