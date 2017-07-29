/*
* @Author: skiming
* @Date:   2017-07-29 19:36:40
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-29 19:38:50
*/

const fs = require('fs')

fs.createReadStream(process.argv[2]).pipe(process.stdout)