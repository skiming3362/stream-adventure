/*
* @Author: skiming
* @Date:   2017-08-14 21:53:11
* @Last Modified by:   skiming
* @Last Modified time: 2017-08-14 22:00:14
*/

const ws = require('websocket-stream')
const stream = ws('ws://localhost:8099')

stream.write('hello\n')