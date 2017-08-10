/*
* @Author: skiming
* @Date:   2017-08-10 21:56:41
* @Last Modified by:   skiming
* @Last Modified time: 2017-08-10 22:01:00
*/

const request = require('request')

const r = request.post('http://localhost:8099')

process.stdin.pipe(r).pipe(process.stdout)