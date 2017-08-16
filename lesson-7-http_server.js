/*
* @Author: skiming
* @Date:   2017-08-09 22:51:04
* @Last Modified by:   skiming
* @Last Modified time: 2017-08-09 23:06:28
*/

const http = require('http')
const through = require('through2')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(through(function (buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase())
            next()
        }, (done) => {
            done()
        })).pipe(res)
    }
});
server.listen(port)