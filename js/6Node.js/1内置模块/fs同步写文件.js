'use strict';

var fs = require('fs');

try {
    var data2 = 'Helloagain, Node.js';
	fs.writeFileSync('output.txt', data2);
} catch (err) {
    // 出错了
}
 